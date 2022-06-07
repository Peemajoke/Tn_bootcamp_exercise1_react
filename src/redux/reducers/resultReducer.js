const initialState = { //the initial state
    numQues: 10,
    numCoor: 0,
    isPass: false
  }
  
  const resultReducer = (state = initialState, action) => {
    console.log("resultReducer")
    if(action.type==="resultMode")
        return {...state, numQues: action.numQues, numCoor: action.numCoor, isPass:action.isPass};
    else
      return {...state};
  }

  export default resultReducer