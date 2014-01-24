"use strict"

var vertexCover = require("bipartite-vertex-cover")

module.exports = bipartiteIndependentSet

function compareInt(a, b) {
  return a - b
}

function complement(list, n) {
  var k = list.length
  var result = new Array(n - k)
  var a = 0
  var b = 0
  list.sort(compareInt)
  for(var i=0; i<n; ++i) {
    if(list[a] === i) {
      a += 1
    } else {
      result[b++] = i
    }
  }
  return result
}

function bipartiteIndependentSet(n, m, edges) {
  var cover = vertexCover(n, m, edges)
  return [ complement(cover[0], n), complement(cover[1], m) ]
}