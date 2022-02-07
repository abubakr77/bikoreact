import { ADD_REMINDER } from "../type";
export const add_Remindr = (text, date) => {
  const action = {
    type: ADD_REMINDER,
    text,
    date,
  };
  console.log("Add", action);
  return action;
};
const remove_Reminder=(id){
  
}
