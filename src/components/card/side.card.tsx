import { useNavigate } from "react-router-dom"
import { Button } from "../button"
type SideCardProps = {
    children:React.ReactNode
    image:string
    reverse:boolean
    title:string
}
export const SideCard = (props:SideCardProps) => {
    const {children, image, reverse, title} = props
    const navigate = useNavigate()
    return (
        <div className={`flex ${reverse?"flex-row-reverse":"flex-row"} space-x-16 w-3/5 p-2  justify-between`}>
            <img src={image} alt={image} className="rounded-full w-96"/>
            <div className="flex flex-col space-y-4 w-[55%]">
                <h1 className="text-3xl text-customBlue-800 font-semibold">{title.toUpperCase()}</h1>
                <p className="text-customGray-400">{children}</p>
                <Button label="Voir plus" onClick={()=>navigate("/info/eni")} type="button" variant="primary"/>
            </div>
        </div>
    )
}
