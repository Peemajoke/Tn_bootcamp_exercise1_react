const initialState = { //the initial state
    value: ""
  }
  
  const nameReducer = (state = initialState, action) => {
    console.log("nameReducer")
    return {...state, value: action.value};
  }

  export default nameReducer