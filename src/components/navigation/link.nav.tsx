import { NavLink } from "react-router-dom"

type NavLinkItemProps = {
    to:string
    label?:string
    icon?:React.ReactNode
    style?:string
}
export const LinkNavigation = (props:NavLinkItemProps) =>{
    const {to, label, icon, style} = props
    return (
        <NavLink
            to={to}
            className={({isActive})=>
                isActive ?  " text-primary-400 border-primary-400 underline": " text-customGray-400"
            }
        >
            {
                
            }
            <span className="w-5">
                {icon}
            </span>
            {
                label &&
                <span className={`md:flex flex-1 justify-start text-opacity-70 ${style}`}>
                    { label }
                </span>
            }
        </NavLink>
    )
}