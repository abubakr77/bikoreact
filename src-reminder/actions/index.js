import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER } from "../type";
export const add_Remindr = (text, date) => {
  const action = {
    type: ADD_REMINDER,
    text,
    date,
  };
  console.log("Add", action);
  return action;
};
export const remove_Reminder = (id) => {
  const action = {
    type: REMOVE_REMINDER,
    id,
  };
  console.log("remo", action);
  return action;
};
export const clear_Reminder = () => {
  const action = { type: CLEAR_REMINDER };
  return action;
};
