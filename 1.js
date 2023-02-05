function longest_string(array) {
  var max = array[0].length;
  array.map(v => max = Math.max(max, v.length));
  result = array.filter(v => v.length == max);
  return result;
}
arr = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]
console.log(longest_string(arr))
