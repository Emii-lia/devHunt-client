import { IMentor, INovice } from "./user.types";

export interface IPost {
    user:Partial<INovice|IMentor>
    createdAt:Date
    description?:string
    media?:string
    reactionCount:number
}