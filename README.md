bipartite-independent-set
=========================
This modules computes a [maximum independent set](http://en.wikipedia.org/wiki/Maximum_independent_set) for a [bipartite graph](http://en.wikipedia.org/wiki/Bipartite_graph).  It takes O(sqrt(V) * E) time.

## Example

```javascript
var bipartiteIndependentSet = require("bipartite-independent-set")

var s = bipartiteIndependentSet(4, 4, [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 1],
    [3, 2],
    [3, 3]
    ])

// s = [ [ 0, 2, 3 ], [ 0, 2 ] ]
```

## Install

```
npm install bipartite-independent-set
```

## `require("bipartite-independent-set")(n, m, edges)`
Finds a maximum independent set for the given bipartite graph.

* `n` is a the number of vertices in the first component
* `m` is the number of vertices in the second component
* `edges` is a list of edges in the bipartite graph represented by pairs of integers

**Returns** A pair of lists representing the maximum independent set for the graph

## Credits
(c) 2014 Mikola Lysenko. MIT License