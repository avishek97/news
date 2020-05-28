const initialState={
    arr:[]
}

 const site=(state=initialState,action)=>{
    switch(action.type){
        case "fetch":
          return{
              ...state,
              arr:action.text.articles
          }
        default:
          return state  
    }
}
export default site