import { IUser } from "../../types/user.types"
import Avatar from "../userProfile/components/avatar/avatar"
import image from "../../assets/icon/avatar1.svg"
import wave from './../../assets/wave-min.svg'
import { useNavigate } from "react-router-dom"

export const ProfileCard = () => {
     // const {userInfo} = useContext(UserContext)
     const navigate = useNavigate()
     const userInfo:Partial<IUser> = {
        matricule:"6969",
        firstname:"Lia",
        lastname:"Tan",
        level:"L1",
        description:"Je suis une nouvelle etudiante passionnee de la musique.",
        parcours:"GB",
        profileUrl:image
    }
    return (
        <div className="flex flex-col shadow-md rounded-lg w-11/12" onClick={()=>navigate(`/profile/novices/${userInfo.matricule}`)}>
            <div className="bg-gradient-to-b from-[#0061ff] to-[#60efff] h-40 w-full rounded-t-lg relative">
                <img src={wave} className="absolute bottom-0 left-0 object-cover"/>
            </div>
            <div className="h-2/3 px-4 pb-4 relative">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-3/4 top-0">
                    <Avatar url={userInfo.profileUrl!} size="xlarge"/>
                </div>
                <div className="flex flex-col space-y-0.5 pt-10 text-center">
                    <h1 className="text-2xl text-customBlue-700 font-semibold">{`${userInfo.firstname} ${userInfo.lastname}`}</h1>
                    <p className="text-customGray-400/70 text-lg">{userInfo.level!+userInfo.parcours+" "+userInfo.matricule}</p>
                </div>
            </div>
        </div>
    )
}
