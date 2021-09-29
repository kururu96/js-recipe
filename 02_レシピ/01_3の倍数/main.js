//const number = 24
//nの数字が判定される
const genkiFunction = function(q) {
  for (let n = 0; n <= q; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!")
    } else {
      console.log(n)
    }
  }
}
genkiFunction(30)
