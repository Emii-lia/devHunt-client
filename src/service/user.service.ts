import { USER } from "../constant/endpoint";
import { HttpClient } from "../libs";

class UserService {
    public getConnectedUser(){
        return HttpClient.get(USER.GET)
    }
    public getUserByMatricule(matricule: string){
        return HttpClient.get(USER.GET+matricule);
    }
}

export const userService = new UserService();