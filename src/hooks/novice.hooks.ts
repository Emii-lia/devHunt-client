import { useQuery } from "react-query"
import { noviceService } from "../service/novice.service"

export const useNoviceSuggestion=(matricule:string)=>{
    return useQuery({
        queryKey: ['noviceSuggestion', matricule],
        queryFn: ()=>noviceService.getNoviceWithSimilarInterest(matricule)
    })
}