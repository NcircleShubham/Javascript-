class FactorFinder {
  constructor(number) {
    this.number = number;
  }

  // Member function to find if a number has even or odd factors
  findFactors(callback) {
    let factors = 0;

    for (let i = 1; i <= this.number; i++) {
      if (this.number % i === 0) {
        factors++;
      }
    }

    const result = {
      number: this.number,
      factorCount: factors,
      isEvenFactors: factors % 2 === 0 ? true : false,
    };

    // Invoke the callback function with the result object
    callback(result);
  }

  // Static function to check if a number is prime
  static isPrime(number) {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }
}

// Example usage
const numberToCheck = 12;

const factorFinder = new FactorFinder(numberToCheck);

// Member function usage
factorFinder.findFactors((result) => {
  console.log(`Number ${result.number} has ${result.factorCount} factors.`);
  console.log(`Number has ${result.isEvenFactors ? "even" : "odd"} factors.`);
});

// Static function usage
const primeNumber = 17;
console.log(`${primeNumber} is ${FactorFinder.isPrime(primeNumber) ? "prime" : "not prime"}.`);
