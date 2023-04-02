import { auth, provider, fbProvider } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import {
  REGISTER_SUCCESSFULL,
  REGISTER_FAIL,
  LOGIN_SUCCESSFULL,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  GOOGLE_SUCCESSFULL,
  GOOGLE_FAIL,
  FACEBOOK_SUCCESSFULL,
  FACEBOOK_FAIL,
  APPLE_SUCCESSFULL,
  APPLE_FAIL,
  LOAD_SUCCESS,
  LOAD_FAIL,
} from "../constant/AuthConstant";
import { async } from "@firebase/util";

// register

export const register = (email, password) => async (dispatch) => {
  try {
    const registerData = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const res = registerData?.user;

    dispatch({ type: REGISTER_SUCCESSFULL, payload: res });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error?.message });
  }
};

// login
export const login = (email, password) => async (dispatch) => {
  try {
    const loginData = await signInWithEmailAndPassword(auth, email, password);

    const res = loginData?.user;
    console.log(res)
    dispatch({ type: LOGIN_SUCCESSFULL, payload: res });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error?.message });
  }
};

// google
export const google = () => async (dispatch) => {
  try {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        console.log(token);
        const user = result?.user;

        dispatch({ type: GOOGLE_SUCCESSFULL, payload: user });
      })
      .catch((err) => {
        dispatch({ type: GOOGLE_FAIL, payload: err?.message });
      });
  } catch (error) {
    dispatch({ type: GOOGLE_FAIL, payload: error?.message });
    console.log(error?.message);
  }
};

// facebook

export const facebook = () => async (dispatch) => {
  try {
    signInWithPopup(auth, fbProvider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);

        const user = result.user;

        console.log(user);
        dispatch({ type: FACEBOOK_SUCCESSFULL, payload: user });
      })
      .catch((err) => {
        console.log("promise error", err);
        // dispatch({ type: FACEBOOK_FAIL, payload: err?.message });
      });
  } catch (err) {
    dispatch({ type: FACEBOOK_FAIL, payload: err?.message });
    console.log(err);
  }
};

// logout

export const logout = () => async (dispatch) => {
  try {
    const logoutData = await signOut(auth);
    dispatch({ type: LOGOUT_SUCCESS, payload: logoutData });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error?.message });
  }
};

// refresh
export const refresh = () => async (dispatch) => {
  try {
    let onAuthData = await onAuthStateChanged(auth, (user) => {
      dispatch({ type: LOAD_SUCCESS, payload: user });
    });

    return onAuthData;
  } catch (error) {
    dispatch({ type: LOAD_FAIL, payload: error?.message });
  }
};
