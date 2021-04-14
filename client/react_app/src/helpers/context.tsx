import { createContext } from "react";

type contextState = {
    state: {status: string, data: any},
    dispatch: any
  }
  
  const initialContextState = {
    state: {status: 'start', data: null},
    dispatch: null
  }
  
  const MyContext = createContext<contextState>(initialContextState);

  export default MyContext;