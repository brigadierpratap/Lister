export const createList = (list) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to DB
    const firestore = getFirestore();
    firestore
      .collection("lists")
      .add({
        ...list,
        authorFirstName: "Pallavi",
        authorLastName: "Singh",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_LIST", list });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_LIST_ERROR", err });
      });
  };
};
