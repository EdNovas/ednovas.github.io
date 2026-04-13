---
title: Algorithm算法
tags: [编程]
categories:
  - - 编程
date: 2021-10-01 10:51:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/algorithms_landlord-FINAL.jpg
# highlight_shrink: true
password: 123
---
## Cut property

For any cut C of the graph, if the weight of an edge e in the cut-set of C is strictly smaller than the weights of all other edges of the cut-set of C, then this edge belongs to all MSTs of the graph.

Proof: Assume that there is an MST T that does not contain e. Adding e to T will produce a cycle, that crosses the cut once at e and crosses back at another edge e' . Deleting e' we get a spanning tree T∖{e'}∪{e} of strictly smaller weight than T. This contradicts the assumption that T was a MST.

By a similar argument, if more than one edge is of minimum weight across a cut, then each such edge is contained in some minimum spanning tree.

> https://en.wikipedia.org/wiki/Minimum_spanning_tree#Cut_property

### Definition in class

Let (S,V\S) be a cut and let e∈E be a min weight crossing edge for the cut. Then the MST contains e. (i.e. e is a "safe edge")

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/kruskal_idea.png)

### Proof in class

Suppose the MST T doesn't contain e (e∉T)

So, since T is a spanning tree, there is path P from u to v

W(T')=W(T)-W(e')+w(e) < W(T)

## Greedy MST Algorithm

A = ∅
for j = 1 -> |v|-1

- Find a cut (S,V/S) st. no deges in A cross cut
- Add min weight crossing edge for that cut [A<-A∪{e}]

## Prim's Algorithm

A = ∅

while |A| < |V| - 1

(1) Find edge of min weight that connects A to an isolated vertex

(2) A <- A ∪ {u,v}

### Example

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/prims-algorithm-java.png)

### Proof

In each iteration, let cut be specified: via S = set of vertivles in tree A

Prim adds min weight crossing edge for cut (S,V\S) (Apply C.P. Theorem)

### Pseudocode

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-01_10-50-51.png)

## Kruckal's Algorithm

A = ∅

while |A| < |V| - 1

(1) Find edge (u,v) of min weight not in A

(2) If there's no u-v path using edge in A. Then A <- A ∪{(u,v)} return A

### Example

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/f5ee36e3-7ca4-425f-8907-e1830736b7bc.png)

### Proof by Contradiction

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-01_10-52-08.png)

### Proof spanning tree then prove the constructed spanning tree is of minimal weight

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-01_10-53-26.png)

### Pseudocode

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-01_10-51-45.png)

## Boruvka's Algorithm

The algorithm begins by finding the minimum-weight edge incident to each vertex of the graph, and adding all of those edges to the forest.

Then, it repeats a similar process of finding the minimum-weight edge from each tree constructed so far to a different tree, and adding all of those edges to the forest.

Each repetition of this process reduces the number of trees, within each connected component of the graph, to at most half of this former value, so after logarithmically many repetitions the process finishes.

When it does, the set of edges it has added forms the minimum spanning forest.

> https://en.wikipedia.org/wiki/Bor%C5%AFvka%27s_algorithm

### Pseudocode

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-01_10-56-55.png)

### Proof

Optional Material: http://www.csee.wvu.edu/~ksmani/courses/fa01/random/lecnotes/lec11/MST.pdf

Boruvka’s Algorithm is based upon the following lemma:

Let v ∈ V be any vertex in G. The minimum spanning tree for G must contain the edge (v, w)
that is the minimum weight edge incident on v.

This can be proved by contradiction. Assume the MST does not contain the minimum weight
edge incident on v. If so, there must be another edge connecting v to our MST. However, if we
remove that edge, and add the minimum weight edge (we need to prevent cycles, this is an
MST), then the total edge values would be less than or equal to the tree with the non-minimum
edge. This is a contradiction.

Additionally, at each contraction, the algorithm creates a forest in the original graph.
This forest does not have any edges that would not be in the MST.
Finally, the algorithm runs until there is only one component. T

> http://www-student.cse.buffalo.edu/~atri/cse331/fall16/recitations/Recitation10.pdf

### Example

Initial Graph

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Fig-0-300x139.jpg)

Initially MST is empty. Every vertex is singe component as highlighted in blue color in below diagram.

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/4.jpg)

For every component, find the cheapest edge that connects it to some other component.

| Component | Cheapest Edge that connects it to some other component |
| :-------- | :----------------------------------------------------- |
| {0}       | 0-1                                                    |
| {1}       | 0-1                                                    |
| {2}       | 2-8                                                    |
| {3}       | 2-3                                                    |
| {4}       | 3-4                                                    |
| {5}       | 5-6                                                    |
| {6}       | 6-7                                                    |
| {7}       | 6-7                                                    |
| {8}       | 2-8                                                    |

The cheapest edges are highlighted with green color. Now MST becomes {0-1, 2-8, 2-3, 3-4, 5-6, 6-7}.

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/13.jpg)

After above step, components are { {0,1}, {2,3,4,8}, {5,6,7} }. The components are encircled with blue color.

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/131.jpg)

We again repeat the step, i.e., for every component, find the cheapest edge that connects it to some other component.

| Component | Cheapest Edge that connects it to some other component |
| :-------- | :----------------------------------------------------- |
| {0,1}     | 1-2 (or 0-7)                                           |
| {2,3,4,8} | 2-5                                                    |
| {5,6,7}   | 2-5                                                    |

The cheapest edges are highlighted with green color. Now MST becomes {0-1, 2-8, 2-3, 3-4, 5-6, 6-7, 1-2, 2-5}

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/14.jpg)

At this stage, there is only one component {0, 1, 2, 3, 4, 5, 6, 7, 8} which has all edges. Since there is only one component left, we stop and return MST.

> https://www.geeksforgeeks.org/boruvkas-algorithm-greedy-algo-9/

## Disjoint Set (Union-Find)

A disjoint-set data structure is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets. A union-find algorithm is an algorithm that performs two useful operations on such a data structure:

### Find

Determine which subset a particular element is in. This can be used for determining if two elements are in the same subset.

### Union

Join two subsets into a single subset.

In this post, we will discuss the application of Disjoint Set Data Structure. The application is to check whether a given graph contains a cycle or not.

Union-Find Algorithm can be used to check whether an undirected graph contains cycle or not. Note that we have discussed an algorithm to detect cycle. This is another method based on Union-Find. This method assumes that the graph doesn’t contain any self-loops.

> https://www.geeksforgeeks.org/union-find/

### Example

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/union-find.png)

### Pseudocode

```
Find(i) = id[id[i]]
  id[id[id[...id[i]...]]]
keep calling id recursively until id[i] = i
Find(i)
while(id[i] != i)
  {i <-- id[i]
  }
return i
```

with worst case of O(n) in the while loop

```
// already know [root of i] = a and [root of j] = b
id[a] <-- b XOR id[b] <-- a
weighted-Quick-Union(i,j)
//Assume we keepp track of size (#nodes) in each tree
if tree with a is larger
  id[b] <-- a
O.W
  id[a] <-- b
```

## Proposition

Weighted-Quick-Union ensures that all nodes have depth <= log_2(n) where is # vertices

### Proof

let v be some node

(1) Depth of v increases (by 1) only if root of v changes
(2) Root of v changes only if size of v's tree at least doubles
(3) Let S_j be size(# nodes) in the tree of v after j label changes (root changed)
(4) S_j >= 2 S_(j-1) >= 2*2 S_(j-2) >= ... 2^j *1 --> 2^j <= n <--> j <= log_2(n)

### W-Q-U Runtime

FIND O(logn)

UNION O(1)
Given mixture m,n of connected and union operations, runtime = O(m*log(n))

## Union-Rank

The idea is to always attach smaller depth tree under the root of the deeper tree. This technique is called union by rank. The term rank is preferred instead of height because if path compression technique (we have discussed it below) is used, then rank is not always equal to height. Also, size (in place of height) of trees can also be used as rank. Using size as rank also yields worst case time complexity as O(Logn)

```
Let us see the above example with union by rank
Initially, all elements are single element subsets.
0 1 2 3 

Do Union(0, 1)
   1   2   3  
  /
 0

Do Union(1, 2)
   1    3
 /  \
0    2

Do Union(2, 3)
    1  
 /  |  \
0   2   3
```

### Path Compression

The second optimization to naive method is Path Compression. The idea is to flatten the tree when find() is called.

When find() is called for an element x, root of the tree is returned.

The find() operation traverses up from x to find root.

The idea of path compression is to make the found root as parent of x so that we don’t have to traverse all intermediate nodes again.

If x is root of a subtree, then path (to root) from all nodes under x also compresses.

```
Let the subset {0, 1, .. 9} be represented as below and find() is called
for element 3.
              9
         /    |    \  
        4     5      6
     /     \        /  \
    0        3     7    8
            /  \
           1    2  

When find() is called for 3, we traverse up and find 9 as representative
of this subset. With path compression, we also make 3 as the child of 9 so 
that when find() is called next time for 1, 2 or 3, the path to root is reduced.

               9
         /    /  \    \
        4    5    6     3 
     /           /  \   /  \
    0           7    8  1   2
```

The two techniques complement each other.

The time complexity of each operation becomes even smaller than O(Logn).

In fact, amortized time complexity effectively becomes small constant.

> https://www.geeksforgeeks.org/union-find-algorithm-set-2-union-by-rank/

## BFS (solution for unweighted graph)

Breadth First Traversal (or Search) for a graph is similar to Breadth First Traversal of a tree.

The only catch here is, unlike trees, graphs may contain cycles, so we may come to the same node again.

To avoid processing a node more than once, we use a boolean visited array.

For simplicity, it is assumed that all vertices are reachable from the starting vertex.

### Example

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/bfs1.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/bfs2.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/bfs6.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/bfs7.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/bfs8.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/bfs9.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/bfs10.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/bfs11.png)

```
procedure BFS(G, root) is
  let Q be a queue
  label root as explored
  Q.enqueue(root)
  while Q is not empty do
    v := Q.dequeue()
    if v is the goal then
      return v
    for all edges from v to w in G.adjacentEdges(v) do
      if w is not labeled as explored then
        label w as explored
        Q.enqueue(w)
```

## Path Relaxation Property

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-32-41.png)

## Weighted DAG (Directed Acyclic Graph)

For a general weighted graph, we can calculate single source shortest distances in O(VE) time using Bellman–Ford Algorithm.

For a graph with no negative weights, we can do better and calculate single source shortest distances in O(E + VLogV) time using Dijkstra’s algorithm.

We can calculate single source shortest distances in O(V+E) time for DAGs. The idea is to use Topological Sorting.

We initialize distances to all vertices as infinite and distance to source as 0, then we find a topological sorting of the graph.

Topological Sorting of a graph represents a linear ordering of the graph (See below, figure (b) is a linear representation of figure (a) ).

Once we have topological order (or linear representation), we one by one process all vertices in topological order. For every vertex being processed, we update distances of its adjacent using distance of current vertex.

> https://www.geeksforgeeks.org/shortest-path-for-directed-acyclic-graphs/

### Example

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/shortestpathstart.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/shortestpathsteps.png)

### Algorithm

(1) Use topological sort (via DFS) to obtain topological ordering of vertices

(2) For each vertex u (in topo order) For all adjacent vertices v, call RELAX(u,v)

### Proof of Correctness

Consider shortest path from s to v (v_0,...,v_k) with v_0 = s and v_k = v

Since vertices are processed in topo order, the sequence of RELAX calls includes subsequence RELAX(v_0,v_1), RELAX(v_1,v_2)... RELAX(v_(k-1),v_k)

### Edge Relaxtion

The edge relaxation is the operation to calculate the reaching cost to the vertex lower. More concretely, the operation will become:

```
For the edge from the vertex u to the vertex v, if d[u]+w(u,v)<d[v] is satisfied, update d[v] to d[u]+w(u,v)
```

The vertices u and v stand the neighbors in the graph and d[u] and d[v] stand the reaching cost to the vertices u and v respectively. Also, w(u,v) stands the weight of the edge from the vertex u to the vertex v. To summarize things up to now, we can make this figure below.

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/1_GuDzLpfpwY2_gZZRqkq9hg.png)

Now we know we can reach the vertex u from the starting vertex S through two vertices and that path costs d[u].

Also, we can reach the vertex v from the starting vertex S through four vertices and that path costs d[v].
Here, edge relaxation updates d[v] to d[u]+w(u,v) when d[u]+w(u,v) is less than d[v].

In other words, it updates the current reaching cost to the vertex v (d[v]) to the lower reaching cost (d[u]+w(u,v)).

The reason why it updates the cost is that the path through the vertex u can be shorter because the reaching cost of the path through the vertex u will be lower than the cost of the current path.

Actually, the algorithms for the shortest paths problem solve the problem by repeatedly using the edge relaxation.

> https://towardsdatascience.com/algorithm-shortest-paths-1d8fa3f50769

## Dijkstra's Algorithm(A greedy algorithm)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-25-19.png)

### Conceptual Version

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-25-40.png)

### Example

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-26-38.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-27-20.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-27-30.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-28-06.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-28-31.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-28-42.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-29-00.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-29-13.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-29-24.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-29-34.png)

### Code

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-29-54.png)

### Code compare with Prim

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-30-19.png)

### Runtime

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-30-46.png)

### Claim

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-31-11.png)

### Correctness

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-31-39.png)

## Bellman-Ford Algorithm

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-33-42.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-33-57.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-34-20.png)

### Code

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-34-34.png)

### Correctness

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-35-43.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-36-00.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-04_13-36-18.png)

> From Lectures

## Floyd-Marshall Algorithm

### Problem

Find the shortest path from i to j

### Subproblem

Find the shortest paths from i to j where intermediate vertices belong to {1,2,...,n-1}

= Find shotest path from i to j where intermed vertices belong to {1,2,...,n}

D_ij^(k) - restrict intermed vertices to the set {1,2,...,k}

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-09-42.png)

### Flow Network Example

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-09-58.png)

### Maximum flow Problem

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-10-18.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-10-39.png)

### Min-cut Problem

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-10-48.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-11-16.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-11-33.png)

### Residural Graph G_f

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-11-54.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-12-14.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-12-23.png)

## Ford-Fulkerson Algorithm

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-23-19.png)

### Flow Value Lemma

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-29-07.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-30-01.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-30-16.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-30-27.png)

### Weak Duality

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-30-40.png)

### Max-flow min-cut theorem

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-31-24.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-32-22.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-32-43.png)

### Bad case for Ford-Fulkerson Algorithm

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-26-09.png)

### Shortest augmenting path

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-33-32.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-34-06.png)

### Lemma

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-34-45.png)

#### Proof

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-35-12.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-35-41.png)

### Theorem

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-36-00.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-36-28.png)

## Blocking-flow Algorithm

### Select medians and order statics

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-37-09.png)

### A naive solution

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-25_23-37-48.png)

## Quickselect

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-44-22.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-44-52.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-45-21.png)

### Quickselect Worst-case Analysis

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-45-46.png)

### Pick a Good Pivot

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-46-37.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-47-04.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-47-20.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-47-34.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-47-59.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-48-10.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-48-38.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-48-55.png)

### Runtime

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-49-19.png)

## Probability

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-51-45.png)

### Coin Example

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-51-58.png)

### Dice Example

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-52-08.png)

### Events

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-52-50.png)

### Random Variables

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-53-05.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-53-29.png)

### Events Based on Random Variables

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-53-39.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-54-31.png)

### Expected Value

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-54-46.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-55-08.png)

#### Linearity of Exapectation

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-55-26.png)

### Independence

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-55-56.png)

### Recall Quickselect

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-56-33.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-56-55.png)

### Randomized Quickselect

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-57-09.png)

#### Pick a Good Pivot

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-57-35.png)

### Sketch of Bound on Expected Runtime

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-58-08.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-58-46.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-04_15-59-50.png)

## Dictionary

### Warm-up

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-02-50.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-03-29.png)

### Definition

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-03-57.png)

### Operations

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-04-18.png)

## Unordered list

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-04-41.png)

## Ordered list

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-08-05.png)

## Balanced binary search tree

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-08-27.png)

## Direct-address table

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-09-36.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-09-58.png)

## Hash tables

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-11-19.png)

### Collision

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-11-39.png)

### Not a natrual number

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-12-26.png)

### Handling collisions

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-13-05.png)

### Chaining

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-13-42.png)

### Operations

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-14-11.png)

### Load factor

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-14-26.png)

### Assumption: Simple uniform hashing

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-14-49.png)

### Expected time for unsuccessful search

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-16-33.png)

### Expected time for successful search

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-17-32.png)

### Design hash function

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-17-50.png)

#### Division method

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-18-28.png)

#### Multiplication method

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-18-46.png)

### Universal hashing

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-19-06.png)

#### Average case

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-19-54.png)

#### Construct

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-20-27.png)

### Open addressing

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-20-43.png)

#### Average-case

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-53-14.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-54-04.png)

### Linear probing

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-21-13.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-21-35.png)

### Quadratic probing

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-52-11.png)

## Double hashing

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-52-43.png)

## Amortized Analysis

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-54-42.png)

## The peril of per-operation worst-case analysis

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-55-26.png)

## Aggregate analysis

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-56-23.png)

## Accounting method

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-56-58.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-57-53.png)

## Incrementing Binary Counter Example

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-58-15.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-18_22-59-27.png)

## Dynamic tables

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-30_23-43-57.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-30_23-44-27.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-30_23-44-36.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-30_23-44-46.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-30_23-44-54.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-30_23-45-02.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-30_23-45-11.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-11-30_23-45-20.png)

## Brute-force substring search

### Worst case

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-23-30.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-23-51.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-24-40.png)

## Rabin-Karp fingerprint search

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-25-27.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-25-52.png)

### Challenge 1

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-26-34.png)

#### Horner Method

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-27-12.png)

### Challenge 2

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-27-47.png)

## Efficiently computing the hash function

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-28-08.png)

## Rabin-Karp substring search example

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-29-05.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-29-55.png)

## Rabin-Karp analysis

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-30-59.png)

## Substring search————Knuth-Morris-Pratt

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-32-21.png)

### Determinishtic finite state automaton(DFA)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-32-45.png)

### Java implementation

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-41-09.png)

### DFA construction

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-42-25.png)

### Build DFA from pattern

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-42-56.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-43-16.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-43-28.png)

### DFA construction in linear time

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-43-49.png)

#### Java implementation

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-44-14.png)

## KMP substring search analysis

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_18-44-39.png)

## Greedy Algorithms

### Interval scheduling

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-21-51.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-22-20.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-22-27.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-22-34.png)

### Therem

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-22-52.png)

### Proof

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-23-11.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-23-38.png)

### Analysis

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-23-54.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-24-13.png)

### Interval partitioning

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-24-20.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-24-33.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-24-40.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-24-50.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-24-58.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-25-06.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-25-14.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-26-39.png)

## Scheduling to minimizing lateness

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-27-03.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-27-16.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-27-23.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-27-30.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-27-38.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-27-47.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-28-11.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-28-19.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-12-01_19-28-27.png)

## Optimal caching

## Keep updating......
