import { useContext, useEffect, useState } from "react"
import { UserInfo } from "../userProfile/components/card/user.info.card"
// import { UserContext } from "../../providers/user.provider"
import { FaChevronDown } from "react-icons/fa6"
import { IUser } from "../../types/user.types"
import image from "../../assets/icon/avatar1.svg"
import { app_name } from "../../constant/app"
import { Dropdown } from "../dropdown/dropdown"

type TopNavProps = {
    children:React.ReactNode
    logo:string

}
export const TopNav = (props:TopNavProps) => {
    const { children, logo} = props
    // const {userInfo} = useContext(UserContext)
    const userInfo:Partial<IUser> = {
        firstname:"Lia",
        lastname:"Tan",
        level:"L3",
        parcours:"GB",
        profileUrl:image
    }
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollPosition >= window.innerHeight-100); // Adjust as needed
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav className={`fixed flex flex-row justify-between items-center py-4 px-6 w-screen z-50 ${isScrolled?"bg-[#f8f7f4]":"backdrop-blur-3xl"}`}>
            <div className="flex flex-row items-center space-x-3">
                <figure>
                    <img src={logo} alt="" className="object-cover w-14"/>
                </figure>
                <h2 className="text-xl font-semibold text-customBlue-500 max-md:hidden">{app_name}</h2>
            </div>
            <div className={`flex flex-row space-x-10 ${isScrolled?"":"text-[#f8f7f4]"} max-md:hidden`}>
                {children}
            </div>
            <div className="max-md:hidden">
                {
                    userInfo &&
                    <UserInfo url={userInfo.profileUrl!} username={`${userInfo.firstname} ${userInfo.lastname}`} role={`${userInfo.level} ${userInfo.parcours}`} status="active">
                        <FaChevronDown/>
                    </UserInfo>
                }
            </div>
            <div className="md:hidden">
                <Dropdown>
                    {children}
                </Dropdown>
            </div>
        </nav>
  )
}
