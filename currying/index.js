// someFunction(a, b, c);
// curriedFuction(a)(b)(c);

// const addTax = (taxRate, amount) => {
//   return amount * (1 + taxRate / 100);
// }

// const addLocalTax = curriedVersionOfAddTax(3);

// addLocalTax(amount);





// const isOlderThan = (minAge, personAge) => personAge >= minAge;

// const isAdult = curriedVersionOfIsOlder(21);

// if (isAdult(student.age)) {
//   var agesArray = []
// }

// const adultAges = agesArray.filter(isAdult);




const logger = (severity) => {
 return (message) => console.log(`${severity}: ${message}`);
}

const normalLogger = logger('NORMAL');
const alertLogger = logger('WARNING');
const severeLogger = logger('CRITICAL');

normalLogger('This is just a normal loggger');
normalLogger('Hocus Pocus');
console.log('\n');

alertLogger('Please have another look at this!');

console.log();
severeLogger('This is serious!!!!');
console.log();



const f2 = (a) => {
  console.log(`Received 1 variable ${a}`);
  return (b) => {
    console.log(`Received 2 variables ${a} and ${b}`);
    return (c) => {
      console.log(`Received 3 variables ${a}, ${b} and ${c}`);
    }
  }
}

const callWith = f2(1);

const callAgainWith = callWith(2);

callAgainWith(3);
