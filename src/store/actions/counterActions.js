// actiunile trebuie sa fie functii pure
export const add = () => {
  return {
    type: "counter/add",
  };
};

export const sub = () => {
  return {
    type: "counter/sub",
  };
};

export const addNumber = (number) => {
  return {
    type: "counter/increase",
    payload: number,
  };
};
