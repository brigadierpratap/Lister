import firebase from "firebase/app";
import "firebase/storage";
export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const fb = getFirebase();
    fb.auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNOUT_ERROR", err });
      });
  };
};
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName.toString(),
            lastName: newUser.lastName.toString(),
            initials: newUser.firstName[0] + newUser.lastName[0],
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const resetPassword = (email) => {
  return (dispatch, getState, { getFirebase }) => {
    const fb = getFirebase();
    const auth = fb.auth();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch({ type: "PASS_RESET" });
      })
      .catch((err) => {
        // An error happened.
        dispatch({ type: "PASS_RESET_ERROR", err });
      });
  };
};

export const uploadDp = (file, uid) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child("/images/" + file.name).put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (
      snapshot
    ) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

      uploadTask.snapshot.ref
        .getDownloadURL()
        .then((downloadURL) => {
          return firestore
            .collection("users")
            .doc(uid)
            .set({ dpUrl: downloadURL }, { merge: true });
        })
        .then(() => dispatch({ type: "URL" }))
        .catch((err) => {
          dispatch({ type: "URL_ERROR", err });
        });
    });
  };
};
