---
color: navy-light
colorSchema: auto
layout: cover
routerMode: hash
title: Asynchronous 3-Majority Dynamics with Many Opinions
theme: neversink
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
- **consensus time** = # of rounds to reach consensus

This work focus on complete graphs.

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
    <Arrow x1="100" y1="320" x2="200" y2="340" v-click="2" />
  </div>
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='lime-light' custom='m-10' v-click="2" v-motion
      :initial="{x:180, y:290, opacity: 0}"
      :enter="{ x:180, y:290, opacity: 1,
        transition: { delay: 300, duration: 500 } }" />
  </div>
</div>


---
color: navy-light
---

# Simulation of 2-Choices

Simulation of **synchronous** 2-Choices on $K_{400}$ over $k=20$ colors

<SlidevVideo controls autoplay>
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

