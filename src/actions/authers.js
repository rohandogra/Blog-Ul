import axios from "../config/axios"

export const setAUTHERS = authers => {
  return {
    type: "SET_AUTHERS",
    payload: authers
  }
}

export const startSetAUTHERS = () => {
  return dispatch => {
    axios.get("/users").then(response => {
      const authers = response.data
      dispatch(setAUTHERS(authers))
    })
  }
}
