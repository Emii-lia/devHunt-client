export interface IUser {
    matricule: string
    firstname: string
    lastname: string
    parcours: string
    level: string
    profileUrl: string|null
    description?: string
    contact1?: string
    contact2?: string
    contact3?: string
}
export interface INovice extends IUser {
    passions?:IPassion[]
}
export interface IMentor extends IUser {
    successStory?:ISuccessStory
    specialisation?:ISpecialisation
}
export interface ISuccessStory {
    description?: string
    media?: string
    reactionCount: number
    createdAt:Date
}
export interface IUserContext {
    userInfo:INovice|IMentor
    logout:()=>void
    connectedUser:INovice|IMentor|undefined
}
export interface ISpecialisation{
    specId?: string
    label: string
    description?: string
}
export interface IPassion {
    label: string
}