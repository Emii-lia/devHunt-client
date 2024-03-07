import { MENTOR } from "../constant/endpoint";
import { HttpClient } from "../libs";

class MentorService{
    public getMentorByMatricule(matricule: string){
        return HttpClient.get(MENTOR.GET+matricule)
    }
    public getMentor(){
        return HttpClient.get(MENTOR.GET)
    }
    public getMentorByName(name: string){
        return HttpClient.get(MENTOR.GET+"q?search="+name)
    }
    public getSuggestedMentor(matricule: string){
        return HttpClient.get(MENTOR.GET_WITH_INTEREST+matricule)
    }
}

export const mentorService = new MentorService()