const initState = {
  list: [
    { id: "1", title: "Get Milk", message: "Get 2% milk from market" },
    {
      id: "2",
      title: "Go to Park",
      message: "Go to park to play with children",
    },
    { id: "3", title: "Fruits", message: "Buy Apple and Oranges" },
  ],
};
export const listReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_LIST":
      console.log("created list ", action.list);
      return state;
    case "CREATE_LIST_ERROR":
      console.log(action.err);
      return state;
    default:
      return state;
  }
};
