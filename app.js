gen = function () {
    return Math.round(Math.random() * 10)
}

arr = []

inArr = function (val) {
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] === val) return true
    }
}

while (arr.length < 7) {
    tmp = gen()
    if (inArr(tmp)) continue;
    arr.push(tmp)
}
console.log(arr)
arr.sort(function (a, b) {
    return a - b
});
console.log(arr);