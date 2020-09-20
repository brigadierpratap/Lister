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
export const delList = (listId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("lists")
      .doc(listId)
      .delete()
      .then(() => {
        dispatch({ type: "DEL_LIST" });
      })
      .catch((err) => {
        dispatch({ type: "DEL_LIST_ERROR", err });
      });
  };
};

export const markUnDone = (listId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("lists")
      .doc(listId)
      .set(
        {
          isDone: false,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: "UNDONE_LIST" });
      })
      .catch((err) => {
        dispatch({ type: "UNDONE_LIST_ERROR", err });
      });
  };
};

export const markDone = (listId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("lists")
      .doc(listId)
      .set(
        {
          isDone: true,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: "DONE_LIST" });
      })
      .catch((err) => {
        dispatch({ type: "DONE_LIST_ERROR", err });
      });
  };
};
