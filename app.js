gen = function () {
    return Math.round(Math.random() * 100)
}

arr = []

inArr = function (val) {
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] === val) return true
    }
}

while (arr.length < 10) {
    tmp = gen()
    if (inArr(tmp)) continue;
    arr.push(tmp)
}
arr = arr.join()
arr = arr.replace(/0/i, 'zero');
arr = arr.split(',', 10);
console.log(arr);