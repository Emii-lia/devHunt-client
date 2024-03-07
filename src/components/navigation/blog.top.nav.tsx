import { app_name } from "../../constant/app"
import { IUser } from "../../types/user.types"
import image from "../../assets/image/100790.png"
import Avatar from "../userProfile/components/avatar/avatar"
import { InputField } from "../input"
import { FaSearch } from "react-icons/fa"

type BlogTopNavProps = {
    children:React.ReactNode
    logo:string
}
export const BlogTopNav = ({children, logo}:BlogTopNavProps) => {
     // const {userInfo} = useContext(UserContext)
     const userInfo:Partial<IUser> = {
        firstname:"Lia",
        lastname:"Tan",
        level:"L3",
        parcours:"GB",
        profileUrl:image
    }
    return (
        <nav className="flex flex-row justify-between px-4 items-center py-5 shadow-sm fixed w-full">
            <div className="flex flex-row items-center space-x-3">
                <figure>
                    <img src={logo} alt="" className="object-cover w-14"/>
                </figure>
                <h2 className="text-xl font-semibold text-customBlue-500 max-md:hidden">{app_name}</h2>
            </div>
            <div className="flex flex-row space-x-3 w-1/3">
                <div className="flex flex-row items-center space-x-8 w-2/3">
                    {children}
                </div>
            <InputField name="search" onChanged={()=>console.log("")} placeholder="Rechercher publication..." type="search" iconEnd={<FaSearch/>} style="rounded-full h-9" size="small"/>
            </div>
            <Avatar url={userInfo.profileUrl!} status="active"/>
        </nav>
    )
}
