import { formatDistanceToNow } from "date-fns"
import { IPost } from "../../types/post.types"
import { UserInfo } from "../userProfile/components/card/user.info.card"
import { Join } from "../layout/components/join"
import { IconButton } from "../button"
import { useState } from "react"
import { FaHeart, FaRegHeart, FaShare } from "react-icons/fa6"
import { Divider } from "../layout"

type PostCardProps = {
    post:IPost
}
export const PostCard = ({post:{createdAt, reactionCount, user, description, media}}:PostCardProps) => {
    const relativeDate = formatDistanceToNow(createdAt)
    const [react, setReact] = useState<boolean>(false)
    let react_count = reactionCount
    const toggleReaction = ()=>{
        setReact(react=> !react)
        react?react_count+=1:react_count-=1
    }
    return (
        <div className="flex flex-col space-y-3 shadow-md rounded-lg pb-1 border-[1px] border-customGray-200/20">
            <div className="p-4">
                <UserInfo url={user.profileUrl!} username={user.firstname!+" "+user.lastname!} role={relativeDate} size="large"/>
            </div>
            <div className="">
                <div className="p-4">
                    <p>{description}</p>
                </div>
                <div className="max-h-80 h-80 w-full relative overflow-hidden">
                    <img src={media} alt="" />
                </div>
            </div>
            <Join>
                <div className="join-item w-1/2 flex justify-center items-center">
                    <IconButton onClick={()=>toggleReaction()} icon={react?<FaHeart/>:<FaRegHeart/>} variant="icon"/>
                    <span className="text-primary-700">
                        {react?react_count+=1:react_count}
                    </span>
                </div>
                <Divider style="divider-horizontal before:bg-customGray-200/20 after:bg-customGray-200/20"/>
                <div className="join-item w-1/2 flex justify-center items-center">
                    <IconButton onClick={()=>console.log("")} icon={<FaShare/>} variant="icon"/>
                </div>
            </Join>
        </div>
    )
}
