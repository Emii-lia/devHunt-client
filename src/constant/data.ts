import { IPart } from "../types/card.type";
import { IPost } from "../types/post.types";
import { IMentor } from "../types/user.types";

export const postList:IPost[]= [
    {
        createdAt: new Date(),
        reactionCount:10,
        user: {
            matricule:"6666",
            firstname:"John",
            lastname:"Smith",
            description:"John Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith",
            level:"L1",
            parcours:"GB",
            profileUrl:"src/assets/image/Pop.png",
            contact1:"John Smith",
            contact2:"John Smith",
            contact3:"jsmith",
        },
        description:"John Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith",
        media:"src/assets/image/kbd.jpg"
    },
    {
        createdAt: new Date(),
        reactionCount:10,
        user: {
            matricule:"6666",
            firstname:"John",
            lastname:"Smith",
            description:"John Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith",
            level:"L1",
            parcours:"GB",
            profileUrl:"src/assets/image/Pop.png",
            contact1:"John Smith",
            contact2:"John Smith",
            contact3:"jsmith",
        },
        description:"John Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith",
        media:"src/assets/image/kbd.jpg"
    },
    {
        createdAt: new Date(),
        reactionCount:10,
        user: {
            matricule:"6666",
            firstname:"John",
            lastname:"Smith",
            description:"John Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith",
            level:"L1",
            parcours:"GB",
            profileUrl:"src/assets/image/Pop.png",
            contact1:"John Smith",
            contact2:"John Smith",
            contact3:"jsmith",
        },
        description:"John Smith Smith Smith Smith Smith Smith Smith Smith Smith Smith",
        media:"src/assets/image/kbd.jpg"
    },
]

export const mentors:IMentor[]=[
    {
        firstname:"John",
        lastname:"Doe",
        level:"M2",
        matricule:"1111",
        parcours:"ASR",
        profileUrl:"src/assets/image/Pop.png",
        contact1:"John Smith",
        contact2:"John Smith",
        contact3:"jsmith",
        description:"John Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe",
        specialisation:
            {
                label:"System Administrator",
                description:"System Administrator Name and Password for the system administrator and the system administrator and",
            },
    },
    {
        firstname:"Nie",
        lastname:"Li",
        level:"M1",
        matricule:"1155",
        parcours:"ASR",
        profileUrl:"src/assets/image/Pop.png",
        contact1:"Nie",
        contact2:"Li Nie",
        contact3:"nie_li",
        description:"John Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe Doe",
        specialisation:
            {
                label:"Cybersecurity",
                description:"Cybersecurity is... I don't know",
            }
    },
]
export const partList:IPart[] = [
    {
        imageUrl:"/src/assets/image/assets_devhunt/OFFICIAL_SPONSORING/Ambatovy-150x150.jpg",
        title:"Ambatovy"
    },
    {
        imageUrl:"src/assets/image/assets_devhunt/OFFICIAL_SPONSORING/AUF-150x150.jpg",
        title:"AUF-"
    },
    {
        imageUrl:"src/assets/image/assets_devhunt/OFFICIAL_SPONSORING/axian-logo-1-150x150.png",
        title:"axian"
    },
    {
        imageUrl:"src/assets/image/assets_devhunt/OFFICIAL_SPONSORING/Bianco-150x150.jpg",
        title:"Bianco"
    },
    {
        imageUrl:"src/assets/image/assets_devhunt/OFFICIAL_SPONSORING/BNGRC-150x150.jpg",
        title:"BNGRC"
    },
    {
        imageUrl:"src/assets/image/assets_devhunt/OFFICIAL_SPONSORING/Hello-Tana-150x150.jpg",
        title:"Hello-Tana"
    },
    {
        imageUrl:"src/assets/image/assets_devhunt/OFFICIAL_SPONSORING/INSTAT-150x150.jpg",
        title:"INSTAT"
    },
    {
        imageUrl:"src/assets/image/assets_devhunt/OFFICIAL_SPONSORING/MESUPRES-150x150.jpg",
        title:"MESUPRES"
    },
    {
        imageUrl:"src/assets/image/assets_devhunt/OFFICIAL_SPONSORING/Relia-150x150.jpg",
        title:"Relia"
    },
]