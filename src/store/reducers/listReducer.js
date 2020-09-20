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
    case "DEL_LIST":
      console.log("Successfully Deleted!");
      alert("Successfully Deleted!");
      return state;
    case "DEL_LIST_ERROR":
      console.log("Error deleting list :", action.err);
      return state;
    case "DONE_LIST":
      console.log("Marked done");
      return state;
    case "DONE_LIST_ERROR":
      console.log("MarkING FAILED", action.err);
      alert("FAILED");
      return state;
    case "UNDONE_LIST":
      console.log("Marked Undone");
      return state;
    case "UNDONE_LIST_ERROR":
      console.log("MarkING FAILED", action.err);
      alert("FAILED");
      return state;
    default:
      return state;
  }
};
