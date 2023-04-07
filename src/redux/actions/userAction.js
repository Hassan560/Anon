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
<<<<<<< HEAD
  LOAD_SUCCESS,
  LOAD_FAIL,
} from "../constant/AuthConstant";
=======
  // APPLE_SUCCESSFULL,
  // APPLE_FAIL,
  LOAD_SUCCESS,
  LOAD_FAIL,
} from "../constant/AuthConstant";

>>>>>>> 74f9cffb403686a785a4040bd214d5dbafdbcaee

// register

export const register = (email, password) => async (dispatch) => {
  try {
    const registerData = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const res = registerData?.user;
<<<<<<< HEAD
=======

>>>>>>> 74f9cffb403686a785a4040bd214d5dbafdbcaee
    dispatch({ type: REGISTER_SUCCESSFULL, payload: res });
    alert('User Registerd Successfully')
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error?.message });
    alert(error?.message);
  }
};

// login
export const login = (email, password) => async (dispatch) => {
  try {
    const loginData = await signInWithEmailAndPassword(auth, email, password);

    const res = loginData?.user;
    dispatch({ type: LOGIN_SUCCESSFULL, payload: res });
    alert('User Login successfully')
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error?.message });
    alert(error?.message);
  }
};

// google
export const google = () => async (dispatch) => {
  try {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        localStorage.setItem('token', JSON.stringify(token))
        const user = result?.user;

        dispatch({ type: GOOGLE_SUCCESSFULL, payload: user });
      })
      .catch((err) => {
        dispatch({ type: GOOGLE_FAIL, payload: err?.message });
      });
  } catch (error) {
    dispatch({ type: GOOGLE_FAIL, payload: error?.message });
    alert(error?.message);
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
