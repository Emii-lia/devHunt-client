import { createContext, useEffect, useState } from "react";
import { IMentor, INovice, IUserContext } from "../types/user.types";
import { useFetchConnectedUser } from "../hooks/user.hooks";

type UserContextProviderProps = {
    children:React.ReactNode
}
export const UserContext = createContext<IUserContext>({} as IUserContext)
export const UserContextProvider = ({children}:UserContextProviderProps) =>{
    const {data} = useFetchConnectedUser()
    const [connectedUser, setConnectedUser] = useState<IMentor|INovice|undefined>({} as IMentor|INovice)
    const [userInfo, setUserInfo] = useState<IMentor|INovice>({} as IMentor|INovice)

    const logout = ()=>{
        setConnectedUser(undefined)
    }
    useEffect(()=>{
        setUserInfo(data?.data.user)
    },[data])
    return (
        <UserContext.Provider value={{userInfo, logout, connectedUser}}>
            {children}
        </UserContext.Provider>
    )
}