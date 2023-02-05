arr = [60, 40, 55, 75, 64];

function alternatingSums(arr) {
    result = [0,0];
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result[0] += arr[i];
        }
        else {
            result[1] += arr[i];
        }
    }
    return result;
}
console.log(alternatingSums(arr));
