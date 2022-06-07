const initialState = { //the initial state
    value: ""
  }
  
  const nameReducer = (state = initialState, action) => {
    console.log("nameReducer")
    if(action.type==="nameMode")
      return {...state, value: action.value};
    else
      return {...state};
  }

  export default nameReducer