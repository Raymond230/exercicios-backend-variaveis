
let M = 90000
let C = 60000
let n = 24

let i = Math.pow(M / C, 1 / n) - 1

i = i * 100
console.log(i.toFixed(3))