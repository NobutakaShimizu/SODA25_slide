---
color: navy-light
colorSchema: auto
layout: cover
routerMode: hash
title: Asynchronous 3-Majority Dynamics with Many Opinions
theme: neversink
favicon: './images/avatar-icon.png'
download: true
defaults:
  layout: 'default'
author: Nobutaka Shimizu
---
# Asynchronous 3-Majority Dynamics with Many Opinions

<div class="grid grid-cols-2 gap-4 place-items-center h-56">

<div>

- Colin Cooper (King's College London)
- Frederik Mallman-Trenn (King's College London)
- Tomasz Radzik (King's College London)
- [**Nobutaka Shimizu**](https://sites.google.com/view/nobutaka-shimizu/home) (Institute of Science Tokyo)
- Takeharu Shiraga (Chuo University)

</div>
<div>

  <QRCode value="https://nobutakashimizu.github.io/SODA25_slide/" :size="120" render-as="svg"/>

<div class="text-center text-blue-500 text-sm">

  $\uparrow$ [slide link](https://nobutakashimizu.github.io/SODA25_slide/)

  [arXiv link](https://arxiv.org/abs/2410.11172)

</div>
</div>

</div>

:: note ::
<div class="text-slate-500">
  14th Jan, SODA2025, New Orleans, USA
</div>

---
color: navy-light
layout: two-cols-title
title: Consensus Dynamics
---

:: title ::
# Consensus Dynamics

Consider an $n$-vertex graph with each vertex holding a **color (opinion)** from $[k]=\{1,\dots,k\}$.

At every discrete-time round, some vertices update their own colors according to a protocol.

:: left ::


<v-clicks>

- Goal: reach **consensus** (all vertices gain the same color)

- Interest: **consensus time** $T_{\mathrm{cons}}$

- application: distributed computing, chemical reaction network, interactive particle system

- **synchronous (parallel)**: all vertices update their colors simultaneously

- **asyncronous (sequential)**: one random vertex updates its color

- this work: complete graph $K_n$ with self-loops

</v-clicks>

:: right ::
<SlidevVideo controls width="300" loop style="display: block; margin: 0 auto;">
  <source src="./images/simulation_movie.mp4" type="video/mp4" />
</SlidevVideo>

---
color: navy-light
title: Example I. Voter 
layout: two-cols-title
---

:: title ::
# Example I. Voter

:: left ::

**Update rule**:
- Pull the copy of a random neighbor.


**Properties**:

<v-clicks at="+4" >

- Simple: Just sees one neighbor
  - related to population protocol
- "dual" of coalescing random walk
- $T_{\mathrm{cons}} = O(n^3)$ for any connected graph

</v-clicks>

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



---
color: navy-light
layout: two-cols-title
---

:: title ::

# Simulation of Sync Voter on $K_{400}$

:: right ::
<div class="absolute top-20">
<SlidevVideo controls width="350">
  <source src="./images/Voter.mp4" type="video/mp4" />
</SlidevVideo>
<div style="text-align:center">

$20$ colors

</div>

</div>

:: left ::

- Pie chart of fractions of colors

<v-clicks>

- Convergence is slow even if 90% have the same color
- On $K_n$.
  - sync: consensus time = $\Theta(n\log n)$ whp
  - async: consensus time = $\Theta(n^2\log n)$ whp

</v-clicks>

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
- **rich get richer**: A popular color is likely to become more popular.
- **conservative**: Balanced state keeps balanced for a while.

</v-click>

:: right ::

<div class="w-60 relative">
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='sky-light' custom='m-10' v-click="1" v-motion  :initial="{x:0, y:0}" />
  </div>
  <div class="absolute top-0, left-0" >
    <Arrow x1="100" y1="50" x2="200" y2="20" v-click="2" />
  </div>
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='rose-light' custom='m-10' v-click="2" v-motion
      :initial="{x:180, y:-50, opacity: 0}"
      :enter="{ x:180, y:-50, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>
  <div class="absolute top-0, left-0" >
    <Arrow x1="100" y1="70" x2="200" y2="90" v-click="2" />
  </div>
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='rose-light' custom='m-10' v-click="2" v-motion
      :initial="{x:180, y:40, opacity: 0}"
      :enter="{ x:180, y:40, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>

  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='rose-light' custom='m-10' v-click="3" v-motion
      :initial="{x:0, y:0, opacity: 0}"
      :enter="{ x:0, y:0, opacity: 1,
        transition: {
          duration: 500
        }
      }" />
  </div>
</div>



<div class="w-60 absolute">
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='sky-light' custom='m-10' v-click="1" v-motion  :initial="{x:0, y:200}" />
  </div>
  <div class="absolute top-0, left-0" >
    <Arrow x1="100" y1="250" x2="200" y2="220" v-click="2" />
  </div>
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='rose-light' custom='m-10' v-click="2" v-motion
      :initial="{x:180, y:150, opacity: 0}"
      :enter="{ x:180, y:150, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>
  <div class="absolute top-0, left-0" >
    <Arrow x1="100" y1="270" x2="200" y2="300" v-click="2" />
  </div>
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='lime-light' custom='m-10' v-click="2" v-motion
      :initial="{x:180, y:250, opacity: 0}"
      :enter="{ x:180, y:250, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>
</div>




---
color: navy-light
layout: two-cols-title
---

:: title ::

# Simulation of Sync 2-Choices on $K_{400}$

:: right ::

<div>
<div v-click-hide="3" class="absolute top-20">
<SlidevVideo controls width="350" loop>
  <source src="./images/Bo2.mp4" type="video/mp4" />
</SlidevVideo>
<div style="text-align:center">

$20$ colors

</div>
</div>
<v-clicks at="3">
<div class="absolute top-20">
<SlidevVideo controls width="350" loop>
  <source src="./images/Bo2_many_color.mp4" type="video/mp4" />
</SlidevVideo>

<div style="text-align:center">

$100$ colors

</div>

</div>
</v-clicks>
</div>


:: left ::

- Pie chart of fractions of colors

<v-clicks>

- Early phase: keep balanced
- After symmetry breaking: rush to convergence
  - rich get richer
- Consensus time can be $\Omega(n/\log n)$ on $K_n$ if $k\approx n$ <span class="text-pink-600"><a href="https://dl.acm.org/doi/10.1145/3087801.3087817">[Berenbrink et al. PODC17]</a></span>.

</v-clicks>




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
- <span v-mark.underline.orange="+4">Otherwise, simulate Voter.</span>

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
layout: two-cols-title
---
:: title ::
# Simulation of Sync 3-Majority on $K_{400}$

:: right ::

<div>
<div v-click-hide="3" class="absolute top-20">
<SlidevVideo controls width="350" loop>
  <source src="./images/Bo3.mp4" type="video/mp4" />
</SlidevVideo>
<div style="text-align:center">

$20$ colors

</div>
</div>
<v-clicks at="3">
<div class="absolute top-20">
<SlidevVideo controls width="350" loop>
  <source src="./images/Bo3_many_color.mp4" type="video/mp4" />
</SlidevVideo>
<div style="text-align:center">

$400$ colors

</div>

</div>
</v-clicks>
</div>


:: left ::

- Pie chart of fractions of colors

<v-clicks>

- Early phase: Behaves like **Voter**
- After symmetry breaking: Behaves like **2-Choices**

</v-clicks>
<v-clicks at="3">

- Fast convergence even if $k=n$
  - best of both worlds!

</v-clicks>


---
color: navy-light
title: What is Known?
---
# 3-Majority on $K_n$ (synchronous)

-  <span class="text-pink-600"><a href="https://dl.acm.org/doi/10.1145/2612669.2612677">[Becchetti, Clementi, Natale, Pasquale, Silvestri, Trevisan, SPAA14] </a></span> proved $T_{\mathrm{cons}} = O(k\log n)$ for $k \ll n^{1/3}$ after "symmetry breaking".
   - They also proved $T_{\mathrm{cons}}$ can be $\Omega(k\log n)$ if $k\ll n^{1/4}$.

<v-clicks>

- <span class="text-pink-600"><a href="https://dl.acm.org/doi/10.5555/2884435.2884481">[Becchetti, Clementi, Natale, Pasquale, and Trevisan, SODA16]</a></span> proved $T_{\mathrm{cons}}=\widetilde{O}(k^3)$ for $k\le n^{1/3-\varepsilon}$ for **any** initial state.
- <span class="text-pink-600"><a href="https://dl.acm.org/doi/10.1145/3212734.3212738">[Ghaffari and Lengler, PODC18]</a></span> proved $O(k\log n)$ for $k\ll n^{1/3}$.
- <span class="text-pink-600"><a href="https://dl.acm.org/doi/10.1145/3087801.3087817">[Berenbrink, Clementi, Elsässer, Kling, Mallmann-Trenn, Natale, PODC17]</a></span> proved that # of remaining colors will be $\widetilde{O}(n/ T)$ after $T$ rounds.

</v-clicks>

<div v-click>
  From results above, we have

  $$
    \begin{align*}
      T_{\mathrm{cons}} \le \widetilde{O}(1)\cdot \begin{cases}
        k	& \text{if }k \ll n^{1/3},\\
        n^{2/3} & \text{otherwise}.
      \end{cases}
    \end{align*}
  $$
  
</div>



---
color: navy-light
title: What is Known?
---
# 3-Majority on $K_n$ (asynchronous)

- $(T_{\mathrm{cons}} \text{ in async}) \approx n\cdot  (T_{\mathrm{cons}} \text{ in sync})$.
  - $\because$ one-round change in sync $\approx$ $n$-round change in async (heuristic argument)
  - <span class="text-pink-600"><a href="https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.OPODIS.2022.23">[Berenbrink, Coja-Oghlan, Gebhard, Hahn-Klimroth, Kaaser, Rau, OPODIS22]</a></span> confirmed this: $T_{\mathrm{cons}} = O(n\log n)$ if $k=2$.
- The case $k>2$ is unexplored yet.

If we believe the heuristics, we have 

$$
  \begin{align*}
    T_{\mathrm{cons}} \le \widetilde{O}(n)\cdot \begin{cases}
      k	& \text{if }k \ll n^{1/3},\\
      n^{2/3} & \text{otherwise}.
    \end{cases}
  \end{align*}
$$


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

<div align="center">

![plot of consensus time](./images/tcons_plot_async.svg)
  <div class="text-gray-500">
  
  bound for asynchronous model <br> from the heuristic argument
  
  </div>
</div>

:: default ::
<div class="rounded-lg border-1 border-blue-600 bg-sky-100" v-click>

  <div class="ml-4 mt-4">

  **Question**: Is the "jump" at $k\approx n^{1/3}$ a right bound?

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

- Fill the "jump" of previous bounds at $k \approx n^{1/3}$
- Extension to sync model?
  - <span v-mark.crossed-off.orange="+3">left open</span> <span v-click="3"> resolved in our upcoming paper </span>

</v-clicks>

---
color: navy-light
title: Idea
layout: intro
---

# Proof Idea

---
color: navy-light
title: Main Lemma
layout: two-cols-title
---

:: title ::
# Two Technical Lemmas

:: left ::

<div class="rounded-lg border-1 border-green-600 bg-lime-100">

  <div class="ml-4">

  **Lemma 1.**

  If $k \ll \sqrt{n}$, the consensus time is $O(kn \log n)$ for any initial state.
  </div>
</div>

<v-clicks>

- Previous works consider $k \ll n^{1/3}$ (sync).
  - "$n^{1/3}$-barrier" in one-step concentration
- Most technical part
  - Key tool: Freedman's inequality
  
</v-clicks>

:: right ::


<div class="rounded-lg border-1 border-green-600 bg-lime-100" v-click>

  <div class="ml-4">

  **Lemma 2.**

  After $T$ rounds, the number of remaining colors is at most $O(n^2\log n/T)$.

  </div>

</div>

<v-clicks>

- Symmetry breaking due to Voter-like behavior
- Analogous result of <span class="text-pink-600"><a href="https://dl.acm.org/doi/10.1145/3087801.3087817">[Berenbrink et al. PODC17]</a></span> for sync
  - Based on Majorization Theory
  - Crucially relies on synchronicity
- Omitted in this talk

</v-clicks>

:: default ::

<v-click>

**Proof of Theorem**: Apply Lemma 2 for $T=n^{1.5}$ and then Lemma 1.

</v-click>


---
color: navy-light
title: proof overview
layout: two-cols-title
columns: is-8
---

:: title ::

# Why $k\ll n^{1/3}$ in Sync?

::left::
Consider sync 3-Majority on $K_n$.

<v-clicks>

- Let $\alpha_t(i) \in[0,1]$ be the fraction of vertices holding color $i$ at round $t$.
  - fraction of each pie in the pie-chart

- Conditinoed on round $t-1$, $\alpha_t(i)$ = sum of $n$ i.i.d. indicators:
  
  $$
    \begin{align*}
      \alpha_t(i)= \frac{1}{n} \sum_{u\in V}\mathbb{1}_{\mathrm{color}_t(u) = i}
    \end{align*}
  $$

  - Concentration via Chernoff/Hoeffding
  
</v-clicks>

:: right ::
<SlidevVideo controls width="300" loop autoplay style="display: block; margin: 0 auto;">
  <source src="./images/Bo3_small.mp4" type="video/mp4" />
</SlidevVideo>

---
color: navy-light
title: proof overview
---
# Why $k\ll n^{1/3}$ in Sync?


- Suppose the pie chart is nearly balanced (i.e., $\alpha_{t-1}(j) = \Theta(1/k)$ for all $j\in[k]$).

<v-clicks>

- If $\alpha_{t-1}(i)$ is slightly larger than $\frac{1}{k}$ (say, $\alpha_{t-1}(i) = \frac{2}{k}$), then $\mathbb{E}_{t-1}[\alpha_t(i)] = \alpha_{t-1}(i) + \Theta\left(\frac{1}{k^2}\right)$.
  - increase by $\Theta\left(\frac{1}{k^2}\right)$ (**additive drift**)
- By Central Limit Theorem, we have
  
$$
\begin{align*}
  \alpha_t(i) &= \mathbb{E}_{t-1}[\alpha_t(i)] \underbrace{\pm O \left( \frac{1}{\sqrt{kn}} \right)}_{\text{standard deviation}} \\
              &= \alpha_{t-1}(i) + \underbrace{\Theta\left(\frac{1}{k^2} \right)}_{\text{additive drift}} \pm O \left( \frac{1}{\sqrt{kn}} \right).
\end{align*}
$$

- We need drift $\gg$ standard deviation: $\frac{1}{k^2} \gg \frac{1}{\sqrt{kn}}$ (thus $k \ll n^{1/3}$).
  - This obstacle is specific to synchronous models. How about async?

</v-clicks>

---
color: navy-light
title: proof overview
---
# Our Analysis for Asynchronous Models

We use Martingale Concentration for $\alpha_t(i)$.

<v-clicks>

By calculation, in async, we have $\mathbb{E}_{t-1}[\alpha_t(i)] \gtrsim \alpha_{t-1}(i) + \frac{1}{k^2n}$ (in a nearly-balanced state).
- Therefore, $\left(\alpha_t(i) - \frac{t}{k^2 n} \right)_{t=0,1,\dots}$ is a submartingale.
- Moreover, $|\alpha_t(i) - \alpha_{t-1}(i)| \le \frac{1}{n}$ due to asynchronicity.

By the Azuma--Hoeffding inequality, we have

  $$
    \begin{align*}
      \alpha_t(i) \gtrsim \alpha_0(i) + \frac{t}{k^2 n} \pm O\left( \sqrt{\frac{t}{n^2}} \right).
    \end{align*}
  $$

For $t=kn$, we need $\frac{1}{k} \gg \sqrt{\frac{k}{n}}$; thus we need $k \ll n^{1/3}$.
  
</v-clicks>

---
color: navy-light
title: proof overview
---
# Our Analysis for Asynchronous Models

We use Martingale Concentration for $\alpha_t(i)$.

By calculation, in async, we have $\mathbb{E}_{t-1}[\alpha_t(i)] \gtrsim \alpha_{t-1}(i) + \frac{1}{k^2n}$ (in a nearly-balanced state).
- Therefore, $\left(\alpha_t(i) - \frac{t}{k^2 n} \right)_{t=0,1,\dots}$ is a submartingale.
- Moreover, $|\alpha_t(i) - \alpha_{t-1}(i)| \le \frac{1}{n}$ due to asynchronicity.

By <span style="color:red" markdown="1">**Freedman's inequality** </span> (Bernstein-type concentration ineq for martingales), we have

  $$
    \begin{align*}
      \alpha_t(i) \gtrsim \alpha_0(i) + \frac{t}{k^2 n} \pm O\left( \sqrt{\frac{t}{\textcolor{red}{k}n^2}} \right).
    \end{align*}
  $$

For $t=kn$, we need $\textcolor{red}{\frac{1}{k} \gg \frac{1}{\sqrt{n}}}$; thus we can address $\textcolor{red}{k \ll \sqrt{n}}$.


---
color: navy-light
title: conclusion
layout: two-cols-title
columns: is-7
---

:: title ::

# Conclusion

:: left ::

- Improved analysis of async 3-Majority on $K_n$
  - Overcome "$n^{1/3}$-barrier" in sync
- Same technique applies to async 2-Choices

## Open Questions

<v-clicks>

- Other graph (e.g., expander)? 
- other protocols (e.g., undecided dynamics)
-  <span v-mark.crossed-off.orange="+4">extend to sync?</span> <span v-click="+4"> ... resolved in our upcoming paper </span>

</v-clicks>

:: right ::

<div style="text-align: center;">
  <div align="center">
    <img src="./images/tcons_plot_both.svg" style="display: block; margin: 0 auto; width: 100%;" />
    <span class="text-gray-500" style="font-size: small;">Voter (black), 2-Choices (red), and 3-Majority (blue)</span>
  </div>
</div>

:: default ::

<div v-click="5" align="center">

<span style="color:red"> Thank You! </span>

</div>


