function gen() {
    return Math.round(Math.random() * 100)
}
let arr = []
function inArr(val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return true
    }
}
while (arr.length < 10) {
    let tmp = gen()
    if (inArr(tmp)) continue;
    arr.push(tmp)
}
arr = arr.join()
let arrOut ='';
for (let i = 0; i < arr.length; i++){
    let outputSign = arr[i];  
    if (outputSign == "0"){
        arrOut += "zero";}
    else {
        arrOut += outputSign;
    }}
arrOut = arrOut.split(',', 10);
console.log(arrOut);
