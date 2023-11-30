const githubReducer = (state, action) => {
 switch (action.type) {
   case "GET_USERS":
     return {
       ...state,
       users: action.payload,
       loading: false,
     };

   case "GET_USER":
     return {
       //Return current state
       ...state,
       //Data to be sent and put it in state
       user: action.payload,
       loading: false,
     };

   case "GET_REPOS":
     return {
       //Return current state
       ...state,
       //Data to be sent and put it in state
       repos: action.payload,
       loading: false,
     };

   case "SET_LOADING":
     return {
       ...state,
       loading: true,
     };
   case "CLEAR_USERS":
     return {
       ...state,
       users: [],
     };

   default:
     return state;
 }
}

export default githubReducer