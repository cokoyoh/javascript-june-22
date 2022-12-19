const add = (a, b) => a + b;
const addf = (a) => (b) => console.log({ result: a + b })


addf(3)(4)

const curry = (addd, num) => {
  return (numb) => addd(num, numb)
}


console.log(curry(add, 9)(3))


const liftf = (fun) => {
  return (num) => {
    return (num2) => fun(num, num2)
  }
}

console.log({lift: liftf(add)(2)(3)})


const increment = (num) => {
  return add(num, 1)
}

console.log({ inc: increment(5) }, increment(8));
