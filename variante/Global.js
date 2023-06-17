import { createContext,useState } from "react";

const AppContext = createContext();

function AppProvider ({children}) {
  const [name, setName] = useState({Uname:null,Sname:null})
  const [uid, setUid] = useState(undefined)

    return(
        <AppContext.Provider
        value={{name,setName,uid,setUid}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext,AppProvider}