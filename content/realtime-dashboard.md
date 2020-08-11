---
title: Real-time Dashboard
description: A lightweight scalable real-time dashboard using React, GraphQL subscriptions and Redis PubSub
position: 1
nav: [{ text: "Home", href: "/" }, { text: "Real-time Dashboard", disabled: true}]
---

<v-btn outlined href="https://github.com/nowke/realtime-dashboard-demo">View on Github</v-btn>
<br>
<br>

In this post, we will be creating a simple scalable dashboard that updates in real-time using [React](https://reactjs.org/), [GraphQL Subscriptions](https://www.howtographql.com/react-apollo/8-subscriptions/), and [Redis PubSub](https://redis.io/topics/pubsub). Real-time dashboards are used for monitoring **infrastructure** (servers, network, services), **application traffic** (transaction volume, number of users), **alerts** (application health, notify of critical issues, downtimes) etc. In most cases, dashboards are driven by one or more datasources.

Developers utilize a few open-source applications to create rich and useful dashboards. For example, **[Kibana](https://www.elastic.co/products/kibana)** is used for visualizing application logs integrated with [ELK Stack](https://www.elastic.co/elk-stack). **[Grafana](https://grafana.com/)** provides the platform for building variety of visualizations on top of time series databases such as [Prometheus](https://prometheus.io/), [Graphite](https://graphiteapp.org/), and [OpenTSDB](http://opentsdb.net/). But, as of today, they support only [pull-based model](https://en.wikipedia.org/wiki/Pull_technology). That is, when a user opens the browser, the application queries the datasource to render the dashboard. It is the most widely used model as compared to a [Push model](https://en.wikipedia.org/wiki/Push_technology). 

## When push-model can be used?

Assume you have a dashboard consisting of ***20 panels***; querying data from multiple datasources in real-time. The User has set a refresh rate of ***5 seconds***. If, on an average ***100 users*** open the dashboard at any given time results in ***20 x 100 = 2000 requests*** every 5 seconds! This is manageable if you have good infrastructure for your underlying time-series database. Otherwise multiple heavy queries can pile-up the memory causing delay in retrieving result. This problem can be solved either by introducing an intelligent caching solution, or a simple push-model using [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API). It is useful (and simple), for the situation where multiple users are querying for the same data, at the same or slightly-different time. 

Here's a minimal flow of how push-model can work:

* A Connection is established between server and client using WebSocket.
* Server sends the required data to client at regular intervals
* If the connection breaks, the client can retry (even indefinitely).
* At any given point of time, all clients display the same data

### What are we building?

Here's the preview of a simple real-time dashboard we will be building. It contains 4 panels - CPU Utilization, Traffic information, Data-center distribution, and alerts.

<img src="/realtime-dashboard/demo.gif" alt="Real-time dashboard preview" style="border: 1px solid #000;">

## GraphQL Subscriptions

[GraphQL](https://graphql.org/) is a query language for APIs and a runtime for fulfilling those queries with your existing data. Check out [graphql.org](https://graphql.org/) for more info if you are not familiar with GraphQL.

Along with [queries](https://graphql.org/learn/queries/) and [mutations](https://graphql.org/graphql-js/mutations-and-input-types/), GraphQL introduced another specification - [Subscriptions](https://www.howtographql.com/graphql-js/7-subscriptions/). 

>  just as the list of mutations that the server supports describes all of the actions that a client can take, the list of subscriptions that the server supports describes all of the events that it can subscribe to. Just as a client can tell the server what data to refetch after it performs a mutation with a GraphQL selection, the client can tell the server what data it wants to be pushed with the subscription with a GraphQL selection. - [GraphQL blog](https://graphql.org/blog/subscriptions-in-graphql-and-relay/)

For example, the client can subscribe for CPU data using the following subscription syntax

```graphql
subscription CPU {
  cpu {
    percentage
  }
}
```

Server can publish data at regular intervals,

```js
pubsub.publish(CPU, { cpu: { percentage: 65 } });
```

## Redis PubSub

Since version 2.0, [Redis](https://redis.io/) supports [Publish-Subscribe pattern](http://en.wikipedia.org/wiki/Publish/subscribe) using commands [PUBLISH](https://redis.io/commands/publish), [SUBSCRIBE](https://redis.io/commands/subscribe) and [UNSUBSCRIBE](https://redis.io/commands/unsubscribe). Read more about it from [Redis Documentation](https://redis.io/topics/pubsub).

Messages can be published via **channels**. To send the message `"hello listeners"` via channel `myradio` - use the `PUBLISH` command

```bash
PUBLISH myradio "hello listeners"
```

But, a channel is useless with nobody to listen! Open another tab with `redis-cli` and subscribe to the channel `myradio`.

```bash
SUBSCRIBE myradio
```

Now, send the publish command again and watch the other terminal.

![Redis PubSub in terminal](/realtime-dashboard/redis-pubsub-terminal.png)

### Combining GraphQL subscription & Redis PubSub

GraphQL subscription specification can be implemented using [Apollo](https://www.apollographql.com/)'s package - [graphql-subscriptions](https://github.com/apollographql/graphql-subscriptions). 

Using Redis as a mediator for publishing events from client to server enables horizontal scaling. The package [graphql-redis-subscriptions](https://github.com/davidyaha/graphql-redis-subscriptions) can be plugged as a PubSubEngine interface to `graphql-subscriptions`.

## Sample Implementation

For full implementation - see [github.com/nowke/realtime-dashboard-demo/](https://github.com/nowke/realtime-dashboard-demo/).

The sample code consists of 3 components,

* Server
* Client - user's browser, connects to the server
* Worker - mocks real events by publishing events to the server

### Server

Install the required pacakges

```
yarn add graphql apollo-server graphql-redis-subscriptions graphql-subscriptions ioredis moment
```

Make sure `redis-server` running in `localhost` at `PORT 6379` and setup the PubSub using `graphql-redis-subscriptions`. It is used for publishing messages.

**[`server/pubsub.js`](https://github.com/nowke/realtime-dashboard-demo/blob/master/server/pubsub.js)**
```js
const { RedisPubSub } = require("graphql-redis-subscriptions");

const pubsub = new RedisPubSub();
module.exports = pubsub;
```

Define the GraphQL schema.

* **Query** - for getting the initial result from Redis.
* **Mutation** - for publishing new messages.
* **Subscription** - for data exchange in real-time between client and server.

```graphql
const { gql } = require("apollo-server");

const schema = gql`
  type Dps {
    timestamp: Int!
    value: Float!
  }

  type Traffic {
    total: Int!
    dps: [Dps]
  }

  type CPU {
    percentage: Float!
  }

  type Distribution {
    region: String!
    percentage: Float!
  }

  type Message {
    title: String!
    description: String!
    color: String!
  }

  type Query {
    cpu: CPU
    traffic: Traffic
    distribution: [Distribution]
    messages: [Message]
  }

  type Mutation {
    cpu: CPU
    traffic: Traffic
    distribution: [Distribution]
    messages: [Message]
  }

  type Subscription {
    cpu: CPU
    traffic: Traffic
    distribution: [Distribution]
    messages: [Message]
  }
`;

module.exports = schema;
```

The helper functions are provided to generate dummy data for all 4 panels - refer [`server/utils/generator.js`](https://github.com/nowke/realtime-dashboard-demo/blob/master/server/utils/generator.js). Using these data generators, write a wrapper function `publishRandomData`.

```js
const pubsub = require("./pubsub");
const { set } = require("./utils/redis");

const COMPONENTS = {
  CPU: "cpu",
  TRAFFIC: "traffic",
  DISTRIBUTION: "distribution",
  MESSAGES: "messages"
};

const publishRandomData = async (generator, component) => {
  const data = generator();
  pubsub.publish(component, { [component]: data });
  await set(component, data);
  return data;
};
```

The function `publishRandomData` can be called for CPU usage as below.

```js
const getCPU = () => 50;
await publishRandomData(getCPU, "CPU")
```

Define the resolver functions for the previously defined schemas (sample given below for CPU)

**[`server/resolvers.js`](https://github.com/nowke/realtime-dashboard-demo/blob/master/server/resolvers.js)**
```js
const { get } = require("./utils/redis");

module.exports = {
  Query: {
    cpu: () => get(COMPONENTS.CPU)
  },
  Mutation: {
    cpu: () => publishRandomData(cpuData, COMPONENTS.CPU),
  },
  Subscription: {
    cpu: {
      subscribe: () => pubsub.asyncIterator(COMPONENTS.CPU)
    },
  }
}
```

Start the server

**[`server/index.js`](https://github.com/nowke/realtime-dashboard-demo/blob/master/server/index.js)**
```js
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
```

```
$ yarn start
yarn run v1.13.0
$ nodemon index.js
...
🚀  Server ready at http://localhost:4000/
```

Go to [localhost:4000](http://localhost:4000/) to open the GraphQL playground.

Subscribe to CPU percentage in **`Tab 1`** and hit the play button

```graphql
subscription {
  cpu {
    percentage
  }
}
```

Run the mutation for CPU in **`Tab 2`** for publishing a random percentage value. The same will be received as an event in **`Tab 1`**. Try the mutation multiple times to receive different values.

```graphql
mutation {
  cpu {
    percentage
  }
}
```

Run the query for CPU in **`Tab 3`**. The last published value is returned - this is because the recent value is cached in Redis.

```graphql
query {
  cpu {
    percentage
  }
}
```

```json
{
  "data": {
    "cpu": {
      "percentage": 25
    }
  }
}
```

### Client

Create a new React application using `create-react-app` for client

```sh
yarn create react-app client
```

Install the required dependencies.

```sh
yarn add apollo-boost apollo-client apollo-link-ws graphql react-apollo subscriptions-transport-ws
```

Setup Apollo HTTP client and websocket client, since both types of connection are required. HTTP server will be running at `http://localhost:4000` and websocket subscription server at `ws://localhost:4000/graphql`.

**[`client/src/App.js`](https://github.com/nowke/realtime-dashboard-demo/blob/master/client/src/App.js)**

```jsx
import React, { Component } from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

import './App.css'
import Home from "./Pages/Home";

// Create an http link:
const httpLink = new HttpLink({
  uri: "http://localhost:4000"
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true
  }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}

export default App;
```

The `Home` component is wrapped with `ApolloProvider`, which enables running queries and subscriptions.

Let us design CPU usage component - [CpuUsage.js](https://github.com/nowke/realtime-dashboard-demo/blob/master/client/src/components/CpuUsage.js).

Define the query and subscription

```js
import gql from "graphql-tag";

const QUERY = gql`
  query CPU {
    cpu {
      percentage
    }
  }
`;

const SUBSCRIPTION = gql`
  subscription CPU {
    cpu {
      percentage
    }
  }
`;
```

The requirement is as follows.

* On initial load, data should be rendered via `query` (from Redis Key-value store)
* Post load, component should render the value from subscription (from Redis PubSub channel)

This can be achieved using `subscribeToMore` prop given by `Query` component in `react-apollo` - [https://www.apollographql.com/docs/react/advanced/subscriptions.html#subscribe-to-more](https://www.apollographql.com/docs/react/advanced/subscriptions.html#subscribe-to-more)

```jsx
import React, { Component } from "react";
import { Query } from "react-apollo";

const CpuUsageContainer = () => (
  <Query query={QUERY}>
    {({ subscribeToMore, ...result }) => (
      <CpuUsage
        {...result}
        subscribeToNewData={() =>
          subscribeToMore({
            document: SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              return subscriptionData.data;
            }
          })
        }
      />
    )}
  </Query>
)
```

Display CPU percentage in the `CpuUsage` component.

```jsx
class CpuUsage extends Component {
  componentDidMount() {
    this.props.subscribeToNewData();
  }

  render() {
    const { data, error, loading } = this.props;
    if (loading) return <p> Loading ... </p>;
    if (error) return <p>Error!</p>;
    return (
      <p> CPU Usage: {data.cpu.percentage}% </p>
    )
  }
}
```

Refer the file [CpuUsage.js](https://github.com/nowke/realtime-dashboard-demo/blob/master/client/src/components/CpuUsage.js) for complete class definition with Pie chart

![CPU Usage](/realtime-dashboard/cpu.png)

### Worker

Real events can be mocked using a simple scheduler script by calling mutation for the 4 panels at regular intervals. The package [node-schedule](https://www.npmjs.com/package/node-schedule) can be used for creating asynchronous schedulers.

Install the dependencies

```
yarn add node-schedule request request-promise
```

Define the mutations for each panels

```js
const queries = {
  CPU: `
    mutation {
      cpu {
        percentage
      }
    }
    `,
  TRAFFIC: `
    mutation {
      traffic {
        total
        dps {
          timestamp
          value
        }
      }
    }
    `,
  DISTRIBUTION: `
    mutation {
      distribution {
        region
        percentage
      }
    }
    `,
  MESSAGES: `
    mutation {
      messages {
        title
        description
        color
      }
    }
    `
};
```

For example, add a scheduler for CPU using `schedule.scheduleJob` for every 3 seconds

```js
const schedule = require("node-schedule");

schedule.scheduleJob("*/3 * * * * *", async () => {
  await makeHttpRequest("CPU"); // Call mutation for CPU panel
  console.log("Fetched new results for CPU");
});
```

Refer [worker/worker.js](https://github.com/nowke/realtime-dashboard-demo/blob/master/worker/worker.js) for complete script

Run the worker

```
$ yarn start
yarn run v1.13.0
$ node worker.js
Starting worker
Scheduled Jobs for CPU, Traffic, distribution, messages
Fetched new results for TRAFFIC
Fetched new results for MESSAGES
Fetched new results for CPU
Fetched new results for DISTRIBUTION
Fetched new results for CPU
Fetched new results for MESSAGES
Fetched new results for TRAFFIC
...
...
```

<img src="/realtime-dashboard/demo.gif" alt="Real-time dashboard preview" style="border: 1px solid #000;">

## Scaling

For high-availability, server program would be deployed in multiple instances connected using a Load-balancer. 

Consider 4 servers `S1`, `S2`, `S3` and `S4`. When a user opens the browser (client), it can connect to any of the servers via load-balancer. All of these servers are connected to a redis cluster `R`.

If nginx is used, websocket requests can be routed by changing the configuration. Refer [www.nginx.com/blog/websocket-nginx/](https://www.nginx.com/blog/websocket-nginx/) for details.

### Architecture diagram

The following diagram represents a configuration where 4 clients are connected to 4 servers via load-balancer

![Architecture diagram](/realtime-dashboard/arch-diagram.svg)

Analyzing a request flow from **Worker**,

![Request analysis](/realtime-dashboard/request-analysis.svg)

1. Worker makes a **`POST`** request (i.e. a **mutation**) to one of the servers (via **load balancer**), say `S1`.
2. **`S1`** sends **`PUBLISH`** command to redis cluster with data for `cpu`.
3. Since all servers are subscribed to same channel in redis, all of them (`S1`, `S2`, `S3` and `S4`) receive data for `cpu`.
4. Servers publish the data via websocket to all the clients (`C1`, `C2`, `C3`, `C4`).