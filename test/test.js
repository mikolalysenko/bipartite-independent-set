"use strict"

var indepSet = require("../indepset")
var tape = require("tape")

tape("bipartite-independent-set", function(t) {

  function verifySet(n, m, edges, expected) {
    var indep = indepSet(n, m, edges)
    t.equals(indep[0].length + indep[1].length, expected, "checking size")
    for(var i=0; i<edges.length; ++i) {
      t.ok(indep[0].indexOf(edges[i][0]) < 0 || indep[1].indexOf(edges[i][1]) < 0, "checking independence property")
    }
    for(var j=0; j<2; ++j) {
      for(var i=0; i<indep[j].length; ++i) {
        t.equals(indep[j].indexOf(indep[j][i]), i, "no repeats")
      }
    }
  }

  function test(n, m, edges, expected) {
    verifySet(n, m, edges, expected)
    var nedges = new Array(edges.length)
    for(var i=0; i<edges.length; ++i) {
      nedges[i] = [ edges[i][1], edges[i][0] ]
    }
    verifySet(m, n, nedges, expected)
  }

  test(0, 0, [], 0)
  test(1, 0, [], 1)
  test(1, 1, [], 2)
  test(4, 4, [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 1],
    [3, 2],
    [3, 3]
    ], 5)

  t.end()
})