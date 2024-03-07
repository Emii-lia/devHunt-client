import { IPart } from "../types/card.type";
import { IPost } from "../types/post.types";
import { IMentor } from "../types/user.types";

export const postList:IPost[]= [
    {
        createdAt: new Date(),
        reactionCount:10,
        user: {
            matricule:"6666",
            firstname:"Mike",
            lastname:"Johnson",
            description:"Maya, once intimidated by lines of code, found solace in the logic and creativity of IT. She devoured online tutorials, aced her classes, and even built a local restaurant's website for their online ordering debut. Now, a coveted internship at a major tech firm awaits her, a testament to her dedication and the power of learning that transcends classrooms.",
            level:"L1",
            parcours:"GB",
            profileUrl:"src/assets/icon/avatar5.svg",
            contact1:"John Smith",
            contact2:"John Smith",
            contact3:"jsmith",
        },
        description:"I, once intimidated by lines of code, found solace in the logic and creativity of IT. He devoured online tutorials, aced his classes, and even built a local restaurant's website for their online ordering debut. Now, a coveted internship at a major tech firm awaits her, a testament to her dedication and the power of learning that transcends classrooms.",
        media:"src/assets/image/kbd.jpg"
    },
    {
        createdAt: new Date(),
        reactionCount:10,
        user: {
            matricule:"6666",
            firstname:"John",
            lastname:"Smith",
            description:"Daniel, a natural tinkerer, always found computers fascinating. Despite initial struggles with complex theories, he persevered, joining coding clubs and attending industry workshops. He even started a Youtube channel explaining tech concepts in a clear, engaging way. Now, not only did he land his dream job at a cybersecurity firm, but his channel inspires countless aspiring IT students, proving that passion and hard work can bridge any knowledge gap.",
            level:"M1",
            parcours:"GB",
            profileUrl:"src/assets/icon/avatar3.svg",
            contact1:"John Smith",
            contact2:"John Smith",
            contact3:"jsmith",
        },
        description:"Daniel, a natural tinkerer, always found computers fascinating. Despite initial struggles with complex theories, he persevered, joining coding clubs and attending industry workshops. He even started a Youtube channel explaining tech concepts in a clear, engaging way. Now, not only did he land his dream job at a cybersecurity firm, but his channel inspires countless aspiring IT students, proving that passion and hard work can bridge any knowledge gap.",
        media:"src/assets/image/code.jpg"
    },
    {
        createdAt: new Date(),
        reactionCount:10,
        user: {
            matricule:"6666",
            firstname:"John",
            lastname:"Smith",
            description:"Daniel, a natural tinkerer, always found computers fascinating. Despite initial struggles with complex theories, he persevered, joining coding clubs and attending industry workshops. He even started a Youtube channel explaining tech concepts in a clear, engaging way. Now, not only did he land his dream job at a cybersecurity firm, but his channel inspires countless aspiring IT students, proving that passion and hard work can bridge any knowledge gap.",
            level:"L1",
            parcours:"GB",
            profileUrl:"src/assets/icon/avatar3.svg",
            contact1:"John Smith",
            contact2:"John Smith",
            contact3:"jsmith",
        },
        description:"JDaniel, a natural tinkerer, always found computers fascinating. Despite initial struggles with complex theories, he persevered, joining coding clubs and attending industry workshops. He even started a Youtube channel explaining tech concepts in a clear, engaging way. Now, not only did he land his dream job at a cybersecurity firm, but his channel inspires countless aspiring IT students, proving that passion and hard work can bridge any knowledge gap.",
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
        profileUrl:"src/assets/icon/avatar2.svg",
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
        profileUrl:"src/assets/icon/avatar4.svg",
        contact1:"Nie",
        contact2:"Li Nie",
        contact3:"nie_li",
        description:"Daniel, a natural tinkerer, always found computers fascinating. Despite initial struggles with complex theories, he persevered, joining coding clubs and attending industry workshops. He even started a Youtube channel explaining tech concepts in a clear, engaging way. Now, not only did he land his dream job at a cybersecurity firm, but his channel inspires countless aspiring IT students, proving that passion and hard work can bridge any knowledge gap.",
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