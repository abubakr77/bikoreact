import { ADD_REMINDER } from "../type";
export const add_Remindr = (text, date) => {
  const action = {
    type: ADD_REMINDER,
    text,
    date,
  };
  return action;
};
