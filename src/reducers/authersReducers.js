const authersReducers = (state = [], action) => {
  switch (action.type) {
    case "SET_AUTHERS": {
      return [].concat(state, action.payload)
    }
    default: {
      return [...state]
    }
  }
}

export default authersReducers
