import { NavLink } from "react-router-dom"
import { IMentor } from "../../types/user.types"
import { UserInfo } from "../userProfile/components/card/user.info.card"

type MentorListProps = {
    mentorList:IMentor[]
}
export const MentorList = ({mentorList}:MentorListProps) => {
  return (
    <div className="flex flex-col space-y-5">
        {
            mentorList.map((mentor:IMentor, index:number) =>(
                <NavLink to={"/profile/mentors/"+mentor.matricule} key={index} className='hover:scale-95 transition-all hover:shadow-md cursor-pointer border-b-[1px] border-customGray-200/10 pb-2'>
                    <UserInfo url={mentor.profileUrl} username={mentor.firstname+" "+mentor.lastname} role={"@"+mentor.specialisation?.label}/>
                </NavLink>
            ))
        }
    </div>
  )
}
