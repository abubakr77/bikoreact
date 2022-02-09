import { ADD_REMINDER, REMOVE_REMINDER } from "../type";

const reminders = (state = [], action) => {
  let reminders = [];
  if (action.type === ADD_REMINDER) {
    reminders = [
      ...state,
      { text: action.text, date: action.date, id: Math.random() },
    ];
    return reminders;
  } else if (action.type === REMOVE_REMINDER) {
  } else return reminders;
};
export default reminders;
