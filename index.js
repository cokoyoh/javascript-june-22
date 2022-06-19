// someFunction(a, b, c);
// curriedFuction(a)(b)(c);

const addTax = (taxRate, amount) => {
  return amount * (1 + taxRate / 100);
}

const addLocalTax = curriedVersionOfAddTax(3);

addLocalTax(amount);





const isOlderThan = (minAge, personAge) => personAge >= minAge;

const isAdult = curriedVersionOfIsOlder(21);

if (isAdult(student.age)) {
  var agesArray = []
}

const adultAges = agesArray.filter(isAdult);




