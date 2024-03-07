import { IPost } from "../../types/post.types"
import { PostCard } from "../card/post.card"

type PostListProps = {
    postList:IPost[]
}
export const PostList = ({postList}:PostListProps) => {
  return (
    <div className="flex flex-col space-y-14 w-3/5 py-10">
        {
            postList.map((post:IPost, index:number) =>(
                <PostCard post={post} key={index}/>
            ))
        }
    </div>
  )
}
