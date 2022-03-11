const Add = (inputVal) => {
    return {
        type:"add",
        payload:inputVal
    }
}

const Remove = (inputVal) => {
  return {
    type: "remove",
    payload: inputVal,
  };
};

export {Add,Remove};