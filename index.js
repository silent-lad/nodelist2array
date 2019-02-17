function nodelist2array(nl) {
  "use strict";
  var l = nl.length,
    arr = new Array(l);
  while (l--) {
    arr[l] = nl[l];
  }
  return arr;
}

module.exports = nodelist2array;
