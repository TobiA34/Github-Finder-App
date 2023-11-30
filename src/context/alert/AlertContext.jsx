import { createContext, useReducer } from "react";

import alertReducer from './AlertReducer'

//Create an alert context
const AlertContext = createContext()

//Create provider
export const AlertProvider = ({children}) => {
    //set state to null becuase nothing will be set yet
  const initialState = null;

// create a reducer which includes a state and dispatch. Inside useReducer set alertReducer and initialState
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // function to set alert
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });
    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }),3000);
  };

  return (
    //Return value object prop which includes state and set alert function and pass children 
    <AlertContext.Provider
      value={{
        alert: state, setAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}



export default AlertContext