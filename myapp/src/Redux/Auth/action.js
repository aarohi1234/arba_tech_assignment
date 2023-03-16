import * as types from "./actionTypes"
import axios from "axios";
// export const userLogin = (payload) => (dispatch) => {
//   console.log(payload)
//   dispatch({ type: types.USER_LOGIN_REQUEST });
//   return axios
//     .post(`https://fakestoreapi.com/auth/login`, payload)
//     .then((res) => {
//       console.log(res.data)
//       return dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
//     })
//     .catch((err) => {
//       console.log(err);
//       dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
//     });
// }

export const userLogin = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      username: "mor_2314",
      password: "83r5^_"
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json()).then(res => {
      return dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.token });
    })

    .catch((err) => {
      console.log(err);
      dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
    });

}