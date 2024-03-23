import { createSlice } from "@reduxjs/toolkit";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJ_cmuMfj4lvflTAPdFwSeIjXTW-DbnAk",
  authDomain: "clone-95bcd.firebaseapp.com",
  projectId: "clone-95bcd",
  storageBucket: "clone-95bcd.appspot.com",
  messagingSenderId: "1031809662647",
  appId: "1:1031809662647:web:5c323b0fc09a4429929732",
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    userLogin: (state, action) => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
        })
        .catch((err) => console.log(err));
      return state;
    },
  },
});

export const { userLogin } = authSlice.actions;

export default authSlice.reducer;
