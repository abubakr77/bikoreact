const initState = {
  count: 0,
};
const reducer = (state = initState, action) => {
  if (action.type === "ICREASE") {
    return state.count + 1;
  } else if (action.type === "DECREASE") {
    return state.count - 1;
  }
  return state;
};
export default reducer;
