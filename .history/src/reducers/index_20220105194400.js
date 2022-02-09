import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER } from "../type";

const reminders = (state = [], action) => {
  let reminders = [];
  if (action.type === ADD_REMINDER) {
    reminders = [
      ...state,
      { text: action.text, date: action.date, id: Math.random() },
    ];
    return reminders;
  } else if (action.type === REMOVE_REMINDER) {
    reminders = state.filter((reminder) => reminder.id !== action.id);
    return reminders;
  } else if (action.type === CLEAR_REMINDER) {
    reminders = state.splice(0, state.length);
    return reminders;
  } else return reminders;
};
export default reminders;
