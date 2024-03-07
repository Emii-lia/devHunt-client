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
        successStory:"Story successfully created successfully with success message and success message description and success message description description and success message description",
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
        successStory:"Story successfully created successfully with success message and success message description and success message description description and success message description",
        specialisation:
            {
                label:"Cybersecurity",
                description:"Cybersecurity is... I don't know",
            }
    },
]