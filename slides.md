---
color: navy-light
colorSchema: auto
layout: cover
routerMode: hash
title: Asynchronous 3-Majority Dynamics with Many Opinions
theme: neversink
defaults:
  layout: 'default'
---
# Asynchronous 3-Majority Dynamics with Many Opinions
- Colin Cooper (King's College London)
- Frederik Mallman-Trenn (King's College London)
- Tomasz Radzik (King's College London)
- [**Nobutaka Shimizu**](https://sites.google.com/view/nobutaka-shimizu/home) (Institute of Science Tokyo)
- Takeharu Shiraga (Chuo University)

<div class="text-right text-blue-500/70 text-sm">

SODA25 ([arXiv link](https://arxiv.org/abs/2410.11172))

</div>

---
color: navy-light
layout: two-cols-title
title: Consensus Dynamics
---

:: title ::
# Consensus Dynamics

:: left ::

Consider an $n$-vertex graph $G = (V,E)$
  - each vertex holds a **color (opinion)** from $[k]$

<v-clicks>

At every round, some vertices update their own colors according to a protocol.
- Goal: reach **consensus** (all vertices gain the same color)
- **consensus time** $T_{\mathrm{cons}}$ = # of rounds to reach consensus

This work focus on complete graphs $K_n$.

</v-clicks>

:: right ::
<SlidevVideo controls>
  <source src="./images/simulation_movie.mp4" type="video/mp4" />
</SlidevVideo>

---
color: navy-light
title: Synchronous and Asynchronous
---
# Synchronous and Asynchronous


Two kinds update schedules: At every round
<v-clicks>

  - **synchronous (parallel)**: all vertices simultaneously update their colors
  - <span v-mark.underline.orange="+4"> **asynchronous (sequential)**: one random vertex updates its color </span>
  - Intuitively, (consensus time in sync) $\approx$ (consensus time in async $\times n$)
    - relies on the protocol
    - ${}^\exists$protocol that exhibits an exponential gap <span class="text-pink-600"> <a href="https://epubs.siam.org/doi/10.1137/1.9781611977912.144">[Becchetti, Clementi, Pasquale, Trevisan, Vacus, Ziccardi, SODA24] </a> </span>


</v-clicks>



<!-- TODO insert animation of sync and async update -->

---
color: navy-light
title: Example I. Voter 
layout: two-cols-title
---

:: title ::
# Example I. Voter

:: left ::

**Update rule**:
- Pull the opinion of a random neighbor.

:: right ::

<div class="w-60 relative">
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='sky-light' custom='m-10' v-click="1" v-motion  :initial="{x:0}" />
  </div>
  <div class="relative top-0, left-0" >
    <Arrow x1="100" y1="60" x2="200" y2="60" v-click="2" />
  </div>
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='rose-light' custom='m-10' v-click="2" v-motion
      :initial="{x:180, y:0, opacity: 0}"
      :enter="{ x:180, y:0, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='rose-light' custom='m-10' v-click="3" v-motion
      :initial="{x:0, opacity: 0}"
      :enter="{ x:0, opacity: 1,
        transition: {
          duration: 500
        }
      }" />
  </div>
</div>

:: default ::
<v-click at="+4" >

**Properties**:
- simple & efficient
  - just sees one neighbor
  - async can be implemented in population protocol
<v-click>

- consensus time $\approx$ hitting time of random walk

  - $\Theta(n)$ on complete graphs (sync) <span class="text-pink-600"> <a href="https://epubs.siam.org/doi/10.1137/120900368">[Cooper, Elsässer, Ono, Radzik, SIDMA(2013)] </a></span>
  - $\Theta(n^2)$ on complete graphs (sync) <span class="text-pink-600"> <a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ICALP.2016.144"> [Cooper, Rivera, ICALP14] </a></span>

</v-click>

</v-click>




---
color: navy-light
---

# Simulation of Voter

Simulation of **synchronous** Voter on $K_{400}$ over $k=20$ colors

<SlidevVideo controls autoplay>
  <source src="./images/Voter.mp4" type="video/mp4" />
</SlidevVideo>

<div v-click.hide>

- x-axis : color $i$
- y-axis : # of vertices holding color $i$ (sorted at every round)

</div>

<div v-after class="absolute left-56px bottom-66px">

- population changes gradually
- convergence is slow

</div>

---
color: navy-light
title: Example II. 2-Choices
layout: two-cols-title
---

:: title ::
# Example II. 2-Choices

:: left ::

**Update rule**:
- Choose two random neighbors (with replacement).
- <span v-mark.underline.orange="+3">If the two have the same color, pull it.</span>
- Otherwise, keep own color.

<v-click at="+4" >

**Properties**:
- Colors change rarely in the balanced state.
- **rich get richer**: Popular colors likely to become more popular.

</v-click>

:: right ::

<div class="w-60 relative">
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='sky-light' custom='m-10' v-click="1" v-motion  :initial="{x:0, y:50}" />
  </div>
  <div class="absolute top-0, left-0" >
    <Arrow x1="100" y1="100" x2="200" y2="70" v-click="2" />
  </div>
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='rose-light' custom='m-10' v-click="2" v-motion
      :initial="{x:180, y:0, opacity: 0}"
      :enter="{ x:180, y:0, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>
  <div class="absolute top-0, left-0" >
    <Arrow x1="100" y1="120" x2="200" y2="140" v-click="2" />
  </div>
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='rose-light' custom='m-10' v-click="2" v-motion
      :initial="{x:180, y:90, opacity: 0}"
      :enter="{ x:180, y:90, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>

  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='rose-light' custom='m-10' v-click="3" v-motion
      :initial="{x:0, y:50, opacity: 0}"
      :enter="{ x:0, y:50, opacity: 1,
        transition: {
          duration: 500
        }
      }" />
  </div>
</div>



<div class="w-60 absolute">
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='sky-light' custom='m-10' v-click="1" v-motion  :initial="{x:0, y:250}" />
  </div>
  <div class="absolute top-0, left-0" >
    <Arrow x1="100" y1="300" x2="200" y2="270" v-click="2" />
  </div>
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='rose-light' custom='m-10' v-click="2" v-motion
      :initial="{x:180, y:200, opacity: 0}"
      :enter="{ x:180, y:200, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>
  <div class="absolute top-0, left-0" >
    <Arrow x1="100" y1="320" x2="200" y2="350" v-click="2" />
  </div>
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='lime-light' custom='m-10' v-click="2" v-motion
      :initial="{x:180, y:300, opacity: 0}"
      :enter="{ x:180, y:300, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>
</div>


---
color: navy-light
---

# Simulation of 2-Choices

Simulation of **synchronous** 2-Choices on $K_{400}$ over $k=20$ colors

<SlidevVideo controls autoplay loop>
  <source src="./images/Bo2.mp4" type="video/mp4" />
</SlidevVideo>

<div v-click.hide>

- x-axis : color $i$
- y-axis : # of vertices holding color $i$ (sorted at every round)

</div>

<div v-after class="absolute left-56px bottom-66px">

- Balanced state: very stable
- Unbalanced state: rush to convergence

</div>




---
color: navy-light
title: Example II. 3-Majority
layout: two-cols-title
---

:: title ::
# Example III. 3-Majority

:: left ::

**Update rule**:
- Choose two random neighbors (with replacement).
- <span v-mark.underline.orange="+3">If the two have the same color, pull it.</span>
- <span v-mark.underline.orange="+4">Otherwise, simulate Voter</span>

<v-click at="+5" >

**Properties**:
- mixture of Voter and 2-Choices
- best of both worlds?

</v-click>

:: right ::

<div class="w-60 relative">
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='sky-light' custom='m-10' v-click="1" v-motion  :initial="{x:0, y:50}" />
  </div>
  <div class="absolute top-0, left-0" >
    <Arrow x1="100" y1="100" x2="200" y2="70" v-click="2" />
  </div>
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='rose-light' custom='m-10' v-click="2" v-motion
      :initial="{x:180, y:0, opacity: 0}"
      :enter="{ x:180, y:0, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>
  <div class="absolute top-0, left-0" >
    <Arrow x1="100" y1="120" x2="200" y2="140" v-click="2" />
  </div>
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='rose-light' custom='m-10' v-click="2" v-motion
      :initial="{x:180, y:90, opacity: 0}"
      :enter="{ x:180, y:90, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>

<div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='rose-light' custom='m-10' v-click="3" v-motion
      :initial="{x:0, y:50, opacity: 0}"
      :enter="{ x:0, y:50, opacity: 1,
        transition: {
          duration: 500
        }
      }" />
  </div>
</div>

<div class="w-60 absolute">
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='sky-light' custom='m-10' v-click="1" v-motion  :initial="{x:0, y:250}" />
  </div>
  <div class="absolute top-0, left-0" >
    <Arrow x1="100" y1="300" x2="200" y2="270" v-click="2" />
  </div>
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='rose-light' custom='m-10' v-click="2" v-motion
      :initial="{x:180, y:200, opacity: 0}"
      :enter="{ x:180, y:200, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>

  
  <div class="absolute top-0, left-0" >
    <Arrow x1="100" y1="320" x2="200" y2="350" v-click="2" />
  </div>

  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='lime-light' custom='m-10' v-click="2" v-motion
      :initial="{x:180, y:300, opacity: 0}"
      :enter="{ x:180, y:300, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>

  <div class="absolute top-0, left-0" >
    <Arrow x1="100" y1="310" x2="200" y2="310" v-click="4" />
  </div>

  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='yellow-light' custom='m-10' v-click="4" v-motion
      :initial="{x:180, y:250, opacity: 0}"
      :enter="{ x:180, y:250, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>

  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='yellow-light' custom='m-10' v-click="4" v-motion
      :initial="{x:0, y:250, opacity: 0}"
      :enter="{ x:0, y:250, opacity: 1,
        transition: { delay: 1000, duration: 500 } }" />
  </div>

</div>


---
color: navy-light
---

# Simulation of 3-Majority

Simulation of **synchronous** 3-Majority on $K_{400}$ over $k=20$ colors

<SlidevVideo controls autoplay loop>
  <source src="./images/Bo3.mp4" type="video/mp4" />
</SlidevVideo>

<div v-click.hide>

- x-axis : color $i$
- y-axis : # of vertices holding color $i$ (sorted at every round)

</div>

<div v-after class="absolute left-56px bottom-66px">

- Balanced state: Behaves like **Voter**, which breaks symmetry
- Unbalanced state: fast convergence due to **2-Choices**

</div>

---
color: navy-light
title: What is Known?
---
# 3-Majority on $K_n$ (synchronous)

-  <span class="text-pink-600"><a href="https://dl.acm.org/doi/10.1145/2612669.2612677">[Becchetti, Clementi, Natale, Pasquale, Silvestri, Trevisan, SPAA14] </a></span> proved $T_{\mathrm{cons}} = O(k\log n)$ for $k \ll n^{1/3}$ if there is a large gap between the most popular opinion and the other opinions.
   - "rich get richer" property of 3-Majority (in the unbalanced state)
   - They also proved $T_{\mathrm{cons}} = \Omega(k\log n)$ if $k\ll n^{1/4}$ the initial state is balanced.

<v-clicks>

- <span class="text-pink-600"><a href="https://dl.acm.org/doi/10.5555/2884435.2884481">[Becchetti, Clementi, Natale, Pasquale, and Trevisan, SODA16]</a></span> proved $T_{\mathrm{cons}}=\widetilde{O}(k^3)$ for $k\le n^{1/3-\varepsilon}$ for **any** initial state
  - They asked for $O(k\log n)$ bound.
- <span class="text-pink-600"><a href="https://dl.acm.org/doi/10.1145/3212734.3212738">[Ghaffari and Lengler, PODC18]</a></span> proved $O(k\log n)$ for $k\ll n^{1/3}$.
- <span class="text-pink-600"><a href="https://dl.acm.org/doi/10.1145/3087801.3087817">[Berenbrink, Clementi, Elsässer, Kling, Mallmann-Trenn, Natale, PODC17]</a></span> proved that # of remaining opinions will be $O(n\log n/ T)$ after $T$ rounds w.h.p.

</v-clicks>

<v-click>

From results above, we have $T_{\mathrm{cons}} = \widetilde{O}(\min(k,n^{2/3}))$ for any $k$.

</v-click>

---
color: navy-light
title: What is Known?
---
# 3-Majority on $K_n$ (asynchronous)

- Heuristic argument indicates: $(T_{\mathrm{cons}} \text{ in async}) \approx n\cdot  (T_{\mathrm{cons}} \text{ in sync})$
  - <span class="text-pink-600"><a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.OPODIS.2022.23">[Berenbrink, Coja-Oghlan, Gebhard, Hahn-Klimroth, Kaaser, Rau, OPODIS22]</a></span> confirmed this: $T_{\mathrm{cons}} = O(n\log n)$ if $k=2$.
- The case $k\gg 1$ is unexplored yet.

If we believe the heuristics, we have $T_{\mathrm{cons}} = \widetilde{O}(n \cdot \min(k,n^{2/3}))$ for any $k$.


---
color: navy-light
title: Plot
layout: two-cols-title
---

:: title ::

# 3-Majority on $K_n$

:: left ::

<div align="center">

![plot of consensus time](./images/tcons_plot_sync.svg)
  <div class="text-gray-500">
  
  synchronous model (hide polylog factors)
  
  </div>
</div>

:: right ::

<div align="center" v-click>

![plot of consensus time](./images/tcons_plot_async.svg)
  <div class="text-gray-500">
  
  bound for asynchronous model <br> from the **heuristic argument**
  
  </div>
</div v-click>

:: default ::
<div class="rounded-lg border-1 border-blue-600 bg-sky-100" v-click>

  <div class="ml-4 mt-4">

  **Question**: Fill the "jump" at $k\approx n^{1/3}$ and confirm the heuristic argument.

  </div>
</div>

---
color: navy-light
title: main result
layout: two-cols-title
---

:: title ::

# Main Result

<div class="rounded-lg border-1 border-rose-600 bg-orange-100">

  <div class="ml-4">

  **Theorem.**

  For **asynchronous** 3-Majority on $K_n$, the consensus time is $\widetilde{O}(n\cdot \min(k,\sqrt{n}))$ for any $k$ and any initial state.
  Moreover this bound is tight up to polylog factors.
  </div>
</div>

:: left ::

<div align="center">

![plot of consensus time](./images/main_result_plot.svg)

</div>

:: right ::

<v-clicks>

- fill the "jump" of previous bounds at $k \approx n^{1/3}$
- extension to sync model?
  - <span v-mark.crossed-off.orange="+3">left open</span> <span v-click="3"> resolved in our upcoming paper </span>

</v-clicks>


---
color: navy-light
title: Main Lemma
layout: two-cols-title
---

:: title ::
# Two Main Lemmas

:: left ::

<div class="rounded-lg border-1 border-green-600 bg-lime-100">

  <div class="ml-4">

  **Lemma 1.**

  If $k \ll \sqrt{n}$, the consensus time is $O(kn \log n)$ for any initial state.
  </div>
</div>

<v-clicks>

- For sync, previous works consider $k \ll n^{1/3}$.
  - improvement of range of $k$ in async
- Key tool: Freedman's inequality
  - Bernstein-type concentration for martingales
</v-clicks>

:: right ::


<div class="rounded-lg border-1 border-green-600 bg-lime-100">

  <div class="ml-4">

  **Lemma 2.**

  After $T$ rounds, the number of remaining opinions is at most $O(n^2\log n/T)$ w.h.p.

  </div>

</div>

<v-clicks>

- Analogous result of <span class="text-pink-600"><a href="https://dl.acm.org/doi/10.1145/3087801.3087817">[Berenbrink, et al. PODC17]</a></span> for async models.
  - Their proof crucially relies on synchronicity
- omitted in this talk


</v-clicks>

---
color: navy-light
title: proof overview
---
# Analysis of Synchronous Model: Why $k\ll n^{1/3}$?


<v-clicks>

- Let $\alpha_t(i) \in[0,1]$ be the fraction of vertices holding color $i$.
  - We treat $\alpha_t = (\alpha_t(1),\dots,\alpha_t(k)) \in [0,1]^k$ as a vector.
  - Note that $\sum_i \alpha_t(i) = 1$.
  - We consider the $\ell^2$-norm: $\|\alpha_t\|^2 = \sum_{i\in[k]}\alpha_t(i)^2$.
- Conditioned on Round $t-1$, we can calculate the expectation $\mathbb{E}_{t-1}[\alpha_t(i)]$ as follows:
  - $\mathbb{E}_{t-1}[\alpha_t(i)] = \alpha_{t-1}(i)(1+\alpha_{t-1}(i) - \|\alpha_{t-1}\|^2)$ (2-Choices and 3-Majority)
  - $\mathbb{E}_{t-1}[\alpha_t(i)] = \alpha_{t-1}(i)$ (Voter)
- In the synchronous model, $\alpha_t(i)$ can be written as the sum of $n$ independent random variables:
  
  $$
    \begin{align*}
      \alpha_t(i)= \frac{1}{n} \sum_{u\in V}\mathbb{1}_{\mathrm{color}_t(u) = i}.
    \end{align*}
  $$
  
</v-clicks>

---
color: navy-light
title: proof overview
---
# Analysis of Synchronous Model: Why $k\ll n^{1/3}$?


- Suppose $\alpha_{t-1}$ is nearly balanced (i.e., $\alpha_{t-1}(j) = \Theta(1/k)$ for all $j\in[k]$)
<v-clicks>

- If $\alpha_{t-1}(i)$ is slightly larger than $\frac{1}{k}$ (say, $\alpha_{t-1}(i) = \frac{2}{k}$), then $\mathbb{E}_{t-1}[\alpha_t(i)] = \alpha_{t-1}(i) + \Theta\left(\frac{1}{k^2}\right)$.
  - likely to increase by $\Theta\left(\frac{1}{k^2}\right)$ (**additive drift**)
- By Central Limit Theorem, we have

$${1|2}
\begin{aligned}
  \alpha_t(i) &= \mathbb{E}_{t-1}[\alpha_t(i)] \underbrace{\pm O \left( \frac{1}{\sqrt{kn}} \right)}_{\text{standard deviation}} \\
              &= \alpha_{t-1}(i) + \underbrace{\Theta\left(\frac{1}{k^2} \right)}_{\text{additive drift}} \pm O \left( \frac{1}{\sqrt{kn}} \right).
\end{aligned}
$$

- To mitigate the effect of the standard deviation, we need $\frac{1}{k^2} \gg \frac{1}{\sqrt{kn}}$; thus $k \ll n^{1/3}$.
  - this obstacle is specific to synchronous models

</v-clicks>

---
color: navy-light
title: proof overview
---
# Our Analysis for Asynchronous Models

We use Martingale Concentration for $\alpha_t(i)$

<v-clicks>

By calculation, in async, we have $\mathbb{E}_{t-1}[\alpha_t(i)] \gtrsim \alpha_{t-1}(i) + \frac{1}{k^2n}$ (in a nearly-balanced state)
- Therefore, $\left(\alpha_t(i) - \frac{t}{k^2 n} \right)_{t=0,1,\dots}$ is a submartingale
- Moreover, $|\alpha_t(i) - \alpha_{t-1}(i)| \le \frac{1}{n}$ due to asynchronicity

By the Azuma--Hoeffding inequality, we have

  $$
    \begin{align*}
      \alpha_t(i) \gtrsim \alpha_0(i) + \frac{t}{k^2 n} \pm O\left( \sqrt{\frac{t}{n}} \right)
    \end{align*}
  $$
  
</v-clicks>

---
color: navy-light
title: proof overview
---
# Our Analysis for Asynchronous Models

We use Martingale Concentration for $\alpha_t(i)$

By calculation, in async, we have $\mathbb{E}_{t-1}[\alpha_t(i)] \gtrsim \alpha_{t-1}(i) + \frac{1}{k^2n}$ (in a nearly-balanced state)
- Therefore, $\left(\alpha_t(i) - \frac{t}{k^2 n} \right)_{t=0,1,\dots}$ is a submartingale
- Moreover, $|\alpha_t(i) - \alpha_{t-1}(i)| \le \frac{1}{n}$ due to asynchronicity

By the **Freedman's inequality** (Bernstein-type inequality for martingales), we have

  $$
    \begin{align*}
      \alpha_t(i) \gtrsim \alpha_0(i) + \frac{t}{k^2 n} \pm O\left( \sqrt{\frac{t}{\textcolor{red}{k}n}} \right)
    \end{align*}
  $$

<v-clicks>

For $t=k$, we need $\frac{1}{kn} \gg \frac{1}{\sqrt{n}}$; thus we can address $k \ll \sqrt{n}$

</v-clicks>

---
color: navy-light
title: conclusion
---
# Conclusion

- nearly-tight bounds of consensus time of async 3-Majority on $K_n$
  - hold for arbitrary $2\le k \le n$
- **technique**: multi-step concentration via Freedman's inequality
  - seemingly useful to explore other protocols

<v-click>

## Open Questions
- other graph
- other protocols (e.g., undecided dynamics)
-  <span v-mark.crossed-off.orange="+2">extend to sync</span> <span v-click="+2"> ... resolved in our upcoming paper </span>

</v-click>