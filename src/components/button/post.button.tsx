import { IUser } from "../../types/user.types"
import image from '../../assets/icon/avatar1.svg'
import Avatar from "../userProfile/components/avatar/avatar"
import { Button } from "./button"
import { useNavigate } from "react-router-dom"

type PostButtonProps = {
    style?: string
}
export const PostButton = ({style}:PostButtonProps) => {
     // const {userInfo} = useContext(UserContext)
     const navigate = useNavigate()
     const userInfo:Partial<IUser> = {
        profileUrl:image
    }
    return (
        <div className="flex flex-row space-x-10 items-center justify-center w-full">
            <Avatar url={userInfo.profileUrl!}/>
            <Button label="Partager votre experience..." onClick={()=>navigate("post/create")} type="button" variant="neutral" style={style}/>
        </div>
    )
}
