export default function nodelist2array(nl) {
  "use strict";
  var l = nl.length,
    arr = new Array(l);
  while (l--) {
    arr[l] = nl[l];
  }
  return arr;
}
