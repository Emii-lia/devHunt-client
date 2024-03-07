import { FaHome } from "react-icons/fa"
import { FaBell, FaMessage } from "react-icons/fa6"

export interface IBlogNav{
    to: string
    icon: React.ReactNode
}
export const blogNav:IBlogNav[] = [
    {
        to:"/",
        icon:<FaHome size={22} className="text-customGray-300"/>
    },
    {
        to:"/message",
        icon:<FaMessage size={22} className="text-customGray-300"/>
    },
    {
        to:"notification",
        icon:<FaBell size={22} className="text-customGray-300"/>
    }
]