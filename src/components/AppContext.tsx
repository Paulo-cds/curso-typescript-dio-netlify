import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"
import { useNavigate } from "react-router-dom"

interface IAppContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const navigate = useNavigate()


    useEffect(()=>{
      const isLoged = getAllLocalStorage()
      if(isLoged){
        const {login} = JSON.parse(isLoged)
        setIsLoggedIn(JSON.parse(login))
        if(login){
          navigate("/conta/1")

        }
      }
    },[])

    const user = 'paulo'
  
    return (
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
        { children }
      </AppContext.Provider>
    )
}
