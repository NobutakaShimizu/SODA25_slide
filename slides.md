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
  - each vertex holds a **color** from $[k]$

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
- Choose a neighbor u.a.r. and pull its opinion

<v-click at="+4" >

**Properties**:
- very simple
  - just sees one random neighbor
  - population protocol
<v-click>

- expected consensus time
  - $\Theta(n)$ on any expanders
  - $O(n^3)$ on any connected graphs

</v-click>

</v-click>

:: right ::

<div class="w-60 relative">
  <div class="absolute top-0, left-0">
    <Box shape='f-s-1-0' size="40px" color='sky-light' custom='m-10' v-click="1" v-motion  :initial="{x:0}" />
  </div>
  <div class="absolute top-0, left-0">
    <ArrowDraw v-click="2" v-motion
    :initial="{ x: 80, opacity: 0}"
    :enter="{ x: 80, y: 30, opacity: 1,
      transition: {
        duration: 500
      } }"/>
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

<SlidevVideo controls autoplay>
  <source src="./images/Voter.mp4" type="video/mp4" />
</SlidevVideo>

- x-axis : color $i$
- y-axis : # of vertices holding color $i$ (sorted at every round)
  
<v-click>

<center>
<AdmonitionType type="tip" color='yellow-light' title="Convergence is slow even on complete graphs." width="380px"/>
</center>

</v-click>