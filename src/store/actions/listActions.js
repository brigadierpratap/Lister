export const createList = (list) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to DB
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("lists")
      .add({
        ...list,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
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
