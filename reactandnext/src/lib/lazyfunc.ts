const data = [
  {
    name: "first",
    color: "red",
  },
  {
    name: "second",
    color: "blue",
  },
  {
    name: "third",
    color: "orange",
  },
  {
    name: "fourth",
    color: "green",
  },
  {
    name: "fifth",
    color: "purple     ",
  },
];
export const timedData = (): Promise<typeof data> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 5000);
  });
};
