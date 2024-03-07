import { FaBars } from "react-icons/fa6"

type DropdownProps = {
    children:React.ReactNode
}
export const Dropdown = (props:DropdownProps) => {
    const { children} = props
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
                <FaBars />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-5 shadow bg-[#f8f7f4] rounded-lg text-base w-64 space-y-3">
                {children}
            </ul>
        </div>
    )
}
