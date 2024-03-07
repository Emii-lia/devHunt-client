import { PASSION } from "../constant/endpoint";
import { HttpClient } from "../libs";
import { IPassion } from "../types/user.types";

class PassionService{
    public createHobbies(hobby:IPassion){
        return HttpClient.post(PASSION.CREATE, hobby)
    }
}

export const hobbiesService = new PassionService()