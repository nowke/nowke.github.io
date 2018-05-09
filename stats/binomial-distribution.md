---
layout: page
title: Binomial Distribution
permalink: /stats/binomial-distribution
---

### Binomial experiment

A Binomial experiment has the following properties.

* Consists of fixed number of trials (n)
* Trials are independent of each other
* Each trial can be either success or failure
* Probability of success (P) on each trial remains the same

***Example: *** Number of heads in after flipping a coin 10 times

* The experiment is conducted for fixed number of trials - 10
* Probability of getting head in one trial does not affect the other
* Probability of getting head in any trial remains same - 0.5 (in a non-biased coin)

### Binomial variable

> A binomial variable is the number of successes (x) out of all the trials (n).

What is the probability of getting 5 heads after flipping a coin 10 times? Here $$x = 5$$ is a binomial variable.

### Binomial distribution

> The probability distribution of a binomial variable is called **Binomial distribution**.

Let's take the problem statement of flipping a coin - Probability of getting 5 heads after 10 flips? P(X = 5) can be calculated as

$$P(X = 5) = No.\,of\,outcomes\,we\,want\,\times Probability\,of\,each\,outcome$$

For 10 flips, we have a total of $$2\sup{10} =1024$$ outcomes. Hence,

$$Probability\,of\,each\,outcome={1 \over 1024}$$

No. of outcomes where exactly 5 heads occur out of 10 flips = $$^{10}C_5 = 252$$

$$P(X = 5) = 252 \times {1 \over 1024} \approx 24.6 \%$$

#### Deriving General Binomial Probability equation

Let's take the example of a biased coin instead of a fair coin with **60%** chance of heads and **40%** chance of tails.

What is the probability of getting 2 heads out of 3 tosses?

&nbsp;$$ p = 0.6$$ (Probability of getting heads)

&nbsp;$$ x = 2$$ (no. of success i.e. heads)

&nbsp;$$ n = 3$$ (no. of trials)

No. of outcomes we want = $$^{n}C_x = ^{3}C_2 = 3 $$ (HHT, HTH, THH) 

To calculate probability of each outcome, let's take one outcome- HHT

* Probability of getting **H** in trial 1 = 0.6
* Probability of getting **H** in trial 2 = 0.6
* Probability of getting **T** in trial 3 = 0.4

Hence, probability of getting HHT = $$0.6\times0.6\times0.4 = 0.144$$

i.e. $$(0.6)^2 \times (0.4)^1 = (0.6)^2 \times (1-0.6)^(2-1) = p^x \times (1-p)^{n-x}$$ 

Finally,

Probability of getting 2 heads out of 3 = $$3 \times 0.144 = 0.432$$ 

Putting it together,

$$No.\,of\,outcomes\,= ^{n}C_x$$

$$Probability\,of\,each\,outcome\,= p^x \times (1-p)^{(n-x)}$$

$$P(x\,\,of\,\,n) = ^{n}C_x\,\,p^x\,(1-p)^{(n-x)}$$

Hence, the **general binomial probability equation** is,

$$P(x\,\,of\,\,n) = {n! \over x!(n-x)!}\,p^x\,(1-p)^{(n-x)}$$