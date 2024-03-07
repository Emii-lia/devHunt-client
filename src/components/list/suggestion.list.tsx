// import { useEffect, useState } from "react"
// import { useNoviceSuggestion } from "../../hooks/novice.hooks"
import { INovice, IUser } from "../../types/user.types"
import image from "../../assets/image/Pop.png"
import { Modal } from "../modal/modal"
import { ContactCard } from "../userProfile/components/card/contact.card"
import Avatar from "../userProfile/components/avatar/avatar"
import { useState } from "react"
import { UserInfo } from "../userProfile/components/card/user.info.card"

export const SuggestionList = () => {
  // const {userInfo} = useContext(UserContext)
  // const [suggestion, setSuggestion] = useState<Partial<INovice>[]>([])
  const [open, setOpen] = useState<boolean>(false)
  const [selectedNovice, setSelectedNovice] = useState<INovice|null>(null)
  // const userInfo:Partial<IUser> = {
  //    matricule:"6969"
  // }
  // const {data} = useNoviceSuggestion(userInfo.matricule!)
  // useEffect(()=>{
  //   setSuggestion(data?.data.suggestion)
  // },[data])

  const suggestion:INovice[] = [
    {
      matricule:"6666",
      firstname:"John",
      lastname:"Smith",
      description:"John, a natural tinkerer, always found computers fascinating. Despite initial struggles with complex theories, he persevered, joining coding clubs and attending industry workshops. He even started a Youtube channel explaining tech concepts in a clear, engaging way. Now, not only did he land his dream job at a cybersecurity firm, but his channel inspires countless aspiring IT students, proving that passion and hard work can bridge any knowledge gap.",
      level:"L1",
      parcours:"GB",
      profileUrl:"src/assets/icon/avatar6.svg",
      contact1:"John Smith",
      contact2:"John Smith",
      contact3:"jsmith",
      passions:[
        {
          label:"Movie",
        },
        {
          label:"Football",
        },
      ]
    },
    {
      matricule:"6666",
      firstname:"Johnathan",
      lastname:"Kelly",
      description:"Mike, a natural tinkerer, always found computers fascinating. Despite initial struggles with complex theories, he persevered, joining coding clubs and attending industry workshops. He even started a Youtube channel explaining tech concepts in a clear, engaging way. Now, not only did he land his dream job at a cybersecurity firm, but his channel inspires countless aspiring IT students, proving that passion and hard work can bridge any knowledge gap.",
      level:"L1",
      parcours:"GB",
      profileUrl:"src/assets/icon/avatar3.svg",
      contact1:"Nathan Jo",
      contact2:"Kelly Jonathan",
      contact3:"jkelly",
      passions:[
        {
          label:"Movie",
        },
        {
          label:"Football",
        },
      ]
    },
    {
      matricule:"6666",
      firstname:"Johann",
      lastname:"Steven",
      description:"Johan, a natural tinkerer, always found computers fascinating. Despite initial struggles with complex theories, he persevered, joining coding clubs and attending industry workshops. He even started a Youtube channel explaining tech concepts in a clear, engaging way. Now, not only did he land his dream job at a cybersecurity firm, but his channel inspires countless aspiring IT students, proving that passion and hard work can bridge any knowledge gap.",
      level:"L1",
      parcours:"GB",
      profileUrl:image,
      contact1:"Jo Stv",
      contact2:"Joh Steven",
      contact3:"jstven",
      passions:[
        {
          label:"Movie",
        },
        {
          label:"Football",
        },
      ]
    },
  ]
  const handleSelectNovice = (novice:INovice)=>{
    setSelectedNovice(novice) 
  }
  const toggleOpen = (novice:INovice)=>{
    setOpen(open=>!open)
    setSelectedNovice(novice)
  }
  return (
    <div className="flex flex-col space-y-5">
     {
      suggestion.map((s:INovice, i:number) =>(
        <div className="cursor-pointer border-b-[1px] border-customGray-200/10 pb-2 hover:scale-95 transition-all hover:shadow-md" onClick={()=>toggleOpen(s)} key={i}>
          <UserInfo url={s.profileUrl!} username={s.firstname+" "+s.lastname} role={s.level+s.parcours}/>
        </div>
      ))
     } 
     <Modal open={open}>
      {
        selectedNovice !== null &&
        <ContactCard user={selectedNovice}/>
      }
     </Modal>
    </div>
  )
}
