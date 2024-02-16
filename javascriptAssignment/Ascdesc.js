function sortByLastName(names, order = "ASC") {
  function getLastName(name) {
    return name.split(" ").pop();
  }

  function compareLastNames(a, b) {
    const lastNameA = getLastName(a);
    const lastNameB = getLastName(b);
    const comparison = lastNameA.localeCompare(lastNameB);
    return order === "ASC" ? comparison : -comparison;
  }

  names.sort(compareLastNames);
  return names;
}

// Example usage:
const names = ["asd dsa", "john doe", "fgh bgh"];
const sortedNamesASC = sortByLastName(names);
console.log(sortedNamesASC); // Output: ["fgh bgh", "john doe", "asd dsa"]

const sortedNamesDESC = sortByLastName(names, "DESC");
console.log(sortedNamesDESC); // Output: ["asd dsa", "john doe", "fgh bgh"]
