export default function nodelist2array(nl) {
  "use strict";
  var arr = [];
  for (var i = nl.length; i--; arr.unshift(nl[i]));
}
