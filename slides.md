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
- [Nobutaka Shimizu](https://sites.google.com/view/nobutaka-shimizu/home) (Institute of Science Tokyo)
- Takeharu Shiraga (Chuo University)

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
  - **asynchronous (sequential)**: one vertex is chosen u.a.r. to update its color (**this work**)
  - Intuitively, consensus time in sync $\approx$ consensus time in async $\times n$
    - general reduction between them is not known
    - does not hold for some example

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
- Choose a (uniformly) random neighbor and pull its opinion

<v-click at="+4" >

**Properties**:
- simple & efficient
  - just sees one neighbor
  - population protocol
<v-click>

- slow convergence
  - $\Theta(n)$ on complete graphs
  - $O(n^3)$ on any connected graphs

</v-click>

</v-click>

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
---

# Simulation of Voter

Simulation of **synchronous** Voter on $K_{400}$ over $k=20$ colors

<SlidevVideo controls>
  <source src="./images/Voter.mp4" type="video/mp4" />
</SlidevVideo>

<div v-click.hide>

- x-axis : color $i$
- y-axis : # of vertices holding color $i$ (sorted at every round)

</div>

<div v-after class="absolute left-56px bottom-86px">

- Slow convergence

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
- **laziness**: In the balanced state, color change occurs rarely.
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

<v-clicks>

-  <span class="text-slate-400 hover:text-blue-600">[Becchetti, Clementi, Natale, Pasquale, Silvestri, Trevisan, SPAA2014]</span> proved $T_{\mathrm{cons}} = O(k\log n)$ for $k \ll n^{1/3}$ if there is a large gap between the most popular opinion and the other opinions.
     - They also proved $T_{\mathrm{cons}} = \Omega(k\log n)$ if $k\ll n^{1/4}$ the initial configuration is balanced.
- <span class="text-slate-400 hover:text-blue-600">[Becchetti, Clementi, Natale, Pasquale, and Trevisan, SODA2016]</span> proved $T_{\mathrm{cons}}=\widetilde{O}(k^3)$ for $k\le n^{1/3-\varepsilon}$ for **any** initial configuration
  - They asked for $O(k\log n)$ bound (**linear-in-$k$ dependence** <span class="text-slate-400 hover:text-blue-600">[Becchetti, Clementi, Natale, SIGACT News, 2020]</span>)
- <span class="text-slate-400 hover:text-blue-600">[Ghaffari and Lengler, PODC2018]</span> proved $O(k\log n)$ for $k\ll n^{1/3}$.
- <span class="text-slate-400 hover:text-blue-600">[Berenbrink, Clementi, Elsässer, Kling, Mallmann-Trenn, Natale, PODC2017]</span> proved that # of remaining opinions will be $O(n\log n/ T)$ after $T$ rounds whp.

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
  - <span class="text-slate-400 hover:text-blue-600">[Berenbrink, Coja-Oghlan, Gebhard, Hahn-Klimroth, Kaaser, Rau, OPODIS2022]</span> confirmed this: $T_{\mathrm{cons}} = O(n\log n)$ if $k=2$.
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

  **Question**: Fill the gap at $k\approx n^{1/3}$ and confirm the heuristic argument.

  </div>
</div>

---
color: navy-light
title: main result
---

# Main Result

<div class="rounded-lg border-1 border-rose-600 bg-orange-100">

  <div class="ml-4">

  **Theorem.**

  For **asynchronous** 3-Majority on $K_n$, the consensus time is $\widetilde{O}(n\cdot \min(k,\sqrt{n}))$ for any $k$ and any initial configuration.
  Moreover this bound is tight up to polylog factors.

  </div>
</div>

<div align="center">

![plot of consensus time](./images/main_result_plot.svg)

</div>

