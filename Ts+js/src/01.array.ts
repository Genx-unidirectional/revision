//Q- Make typeSafe map function

function mapIt(arr: number[], factor: number) {
  return arr.map((item) => item * factor);
}

//Q- Filter

interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

interface Human extends Fish {}

const animals = [
  { fly: () => {} },
  { fly: () => {} },
  { swim: () => {} },
  { fly: () => {} },
  { swim: () => {} },
  { fly: () => {} },
];

function FishGuard(organism: Fish | Bird): organism is Fish {
  return (organism as Fish).swim !== undefined;
}

function FishFilter(organism: (Fish | Bird)[]) {
  return organism.filter(FishGuard);
}

// console.log(FishFilter(animals));

//find
function findIt<T extends { length: number }>(arr: T[]): T | undefined {
  return arr.find((item) => item.length > 12);
}

// console.log(findIt(["jake", "jokepaul", "timerb", "something has to be done"]));

//findIndex
//findLastIndex
//findLast

//Array form object

const arr = Array.from({ length: 10 }, (_, i) => i);
// console.log(arr);

//Range function : basically we have to make the function which takes the start and stop of array and step of that number series

function range(start: number, stop: number, step: number) {
  return Array.from(
    { length: (start + stop) / step + 1 },
    (_, i) => start + step * i
  );
}

// console.log(range(0, 10, 3));

//
