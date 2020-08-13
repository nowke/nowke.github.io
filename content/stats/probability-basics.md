---
title: Probability Basics
description: Probability Basics
position: 3
nav: [{ text: "Home", href: "/" }, { text: "Statistics and Probability", href: "/stats" }, { text: "Probability Basics", disabled: true}]
---

Probability = $$\large{\mathsf {\#\,of\,favorable\,outcomes \over \#\,of\,total\,possible\,outcomes}}$$

***Examples***:
* In a deck of cards (4 suites), 
    * Probability of drawing **diamond** = $${13 \over 52}$$ = $${1 \over 4}$$
    * Probability of drawing a **Jack** = $${4 \over 52}$$ = $${1 \over 13}$$

* In a 6 sided dice,
    * Probability of getting **number six** = $${1 \over 6}$$
    * Probability of getting **even number** = $${3 \over 6}$$ = $${1 \over 2}$$

## Events

Now that we know the equation for Probability, the **# of favorable outcomes** is also called an **Event** and **# of total possible outcomes** is called **Sample Space**.

$$\mathsf {\#\,of\,favorable\,outcomes\,\color{red}{\leftarrow Event\,(A,\,B,...)} \over \#\,of\,total\,possible\,outcomes\,\color{red}{\leftarrow Sample\,Space\,(S)}}$$

***Example 1***

![Event A](/stats/event-sample-1.svg)
![Event Ā](/stats/event-sample-2.svg)
* Sample S = Deck of cards (52)
* Event A = Drawing a **diamond** from deck of cards
* Event Ā = Complement of A = Drawing a **non-diamond** card from the deck
* P(A) = $${13 \over 52}$$ = $${1 \over 4}$$, P(Ā) = $${39 \over 52}$$ = $${3 \over 4}$$
* Also, P(A) = 1 - P(Ā)

***Example 2***
* Event B = Drawing a Jack from deck of cards
* Event (<span style="text-decoration: overline">B</span>) = Drawing a non-Jack card
* P(B) = $${4 \over 52}$$ = $${1 \over 13}$$, P(<span style="text-decoration: overline">B</span>) = $${48 \over 52}$$ = $${12 \over 13}$$

## Intersection & Union

Take the same sample space S = Deck of cards (52)

* Event A: Draw a **Diamond**
* Event B: Draw a **Jack**
* Event C: Draw a **Heart**

***Example 1: Intersection A, B***

Now, intersection of Event A &amp; Event B (or A and B) refers to **Drawing a Diamond Jack** card. There is only 1 card satisfying this condition.

* A ∩ B =&gt; intersection of A and B =&gt; A and B
* P(A ∩ B) = $${1 \over 52}$$

![Event Intersection](/stats/event-intersection.svg)

***Example 2: Union A, B***

Union of Event A &amp; Event B (A or B) refers to **Drawing a Diamond card or a Jack card**. There are 13 Diamond cards and 4 Jack cards.

* A ∪ B =&gt; Union of A and B =&gt; A or B
* P(A ∪ B) = $${16 \over 52}$$

Looking at graphically,

![Event Union](/stats/event-union.svg)

* P(A ∪ B) = P(A) + P(B) - P(A ∩ B)

***Example 3: Intersection A, C***

Intersection of Event A &amp; Event C refers to **Drawing a card which is both Diamond and Heart**. There are no cards with such condition.

* A ∩ C = Ø
* Event A and Event C are **Mutually exclusive**

![Event Mutually exclusive](/stats/event-mutual-exclusive.svg)

## Conditional Probability

### Independent Events

> Two Events (say A and B) are said to to **independent** of each other, if probability that one event occurs doesn't affect the probability of the other event.

***Example***

**Event A**: Roll 2 on die first time, **Event B**: Roll 6 on die second time

* Here A and B are independent of each other, i.e. Event B is no way affected by the outcome of Event A.
* P(A ∩ B) = P(A) * P(B) = $${1 \over 6} \times {1 \over 6}$$ = $${1 \over 36}$$ 

**For independent events,** 

$$P(B\big|A) =P(A)$$

### Dependent Events

> Two Events (say A and B) are **dependent** if the occurrence of the first event affects the occurrence of the second event.

***Example***

**Event A**: Draw Diamond Ace from the deck, **Event B**: Draw Spades Ace from the remaining deck.

* Here, after the completion of Event A, you're left with one less card in the deck.
* Therefore, P(B\|A) = $${1 \over 52} \times {1 \over 51}$$ = $${1 \over 2601}$$

**For dependent events,**

$$P(B\big|A) ={P(A ∩ B) \over P(A)}$$

$$P(A\big|B) ={P(A ∩ B) \over P(B)}$$

### Bayes' Theorem

***Example***: 

When India wins a cricket match, Mr. Harsha predicts the win correctly 70% of the time. When India loses the match, Harsha will predict win 35% of the time.

Given that, India wins cricket match 60% of the time, what are the chances of India winning whenever Harsha predicts that India wins?

This is clearly a conditional probability problem. 

**Event W**: India wins the match<br>
**Event L**: India loses the match<br>
**Event Y**: Harsha predicts India wins the match<br>
**Event N**: Harsha predicts India loses the match<br>

What's been asked? The probability that India wins (W), given Harsha predicts the win (Y)

i.e. we need to calculate **P(W \| Y)**

What do we know so far,

* P(W) = 60% (India wins 60% of the time)
* P(Y \| W) = 70% (Harsha predicts 70% given India wins)

Now,

$$P(A|B) = {P(A ∩ B) \over P(B)}$$

$$P(B|A) = {P(A ∩ B) \over P(A)}$$

Equating them gives,

$$P(A ∩ B) = P(A|B) \times P(B) = P(B|A) \times P(A)$$

Hence,

$$P(B|A) = {P(A|B) \times P(B) \over P(A)} \color{red}{\leftarrow Bayes'\,Theorem}$$

Now we can calculate ***P(W\|Y)*** as,

$$P(W|Y) = {P(Y|W) \times P(W) \over P(Y)}$$

How to calculate **$$P(Y)$$**? i.e. Probability of Harsha predicting India's win. Harsha predicts India's win in two scenarios - when India actually wins and when India loses. Therefore,

$$P(Y) = 60\% (India\,win) \times 70\% (Predict\,win) + 40\% (India\,lose) \times 35\% (Predict\,win)$$

$$P(Y) = 56\%$$

Therefore,

$$P(W|Y) = {70\% \times 60\% \over 56\%} = 75\%$$

Bottom-line is, **if Harsha says India wins, there's 75% chance that India actually wins**