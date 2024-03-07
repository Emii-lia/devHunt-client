import { NOVICE } from "../constant/endpoint"
import { HttpClient } from "../libs"

class NoviceService {
    public getNoviceByMatricule(matricule: string){
        return HttpClient.get(NOVICE.GET+matricule)
    }
    public getNoviceWithSimilarInterest(matricule: string){
        return HttpClient.get(NOVICE.GET_WITH_INTEREST+matricule)
    }
    public getNovice(){
        return HttpClient.get(NOVICE.GET)
    }
}

export const noviceService = new NoviceService()