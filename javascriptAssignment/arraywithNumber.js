const arraywithNumber = (array) => {
  return array.filter((value) => {
    return /\d/.test(value);
  });
};

let array = ["ad12", "sdf", "iu33", "qwe67"];
console.log(arraywithNumber(array)); // Output: ["ad12", "iu33", "qwe67"]