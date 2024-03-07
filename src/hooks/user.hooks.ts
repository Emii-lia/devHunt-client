import { useQuery } from "react-query"
import { userService } from "../service/user.service"

export const useFetchConnectedUser = ()=>{
    return useQuery({
        queryKey:["connected"],
        queryFn: ()=>userService.getConnectedUser()
    })
}

export const useFetchUserByMatricule = (matricule:string)=>{
    return useQuery({
        queryKey: ["user", matricule],
        queryFn: ()=>userService.getUserByMatricule(matricule)
    })
}