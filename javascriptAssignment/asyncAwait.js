// Function that returns a promise to simulate an asynchronous operation
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Async function using await to wait for 5 seconds
const asyncFunction = async () => {
  console.log("Start");

  // Using await to pause execution for 5 seconds
  await wait(5000);

  console.log("After 5 seconds");
};

// Calling the async function
asyncFunction();
