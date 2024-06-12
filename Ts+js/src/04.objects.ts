//Q- create function which takes the two object and returns new object with all keys and values of the object in the new object
function mergeObj<T>(obj1: T, obj2: T) {
  return { ...obj1, ...obj2 };
}

console.log(
  mergeObj({ person: "ganesh", age: 12 }, { grade: "A", value: "infinite" })
);
