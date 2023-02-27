export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORYE = "MEMORYE";
export const MEMORYRP = "MEMORYRP";
export const MEMORYC = "MEMORYC";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const clear = () => {
  return { type: CLEAR_DISPLAY, payload: 0 };
};

export const change = (islem) => {
  return { type: CHANGE_OPERATION, payload: islem };
};

export const memoryEkleme = () => {
  return { type: MEMORYE };
};

export const memoryCagir = () => {
  return { type: MEMORYRP };
};

export const memoryClean = () => {
  return { type: MEMORYC, payload: 0 };
};
