import { FaHashtag } from "react-icons/fa6"
import { Button } from "../components/button"
import { PostButton } from "../components/button/post.button"
import { Card } from "../components/card"
import { CardActions, CardBody, CardBodyTitle, CardHeader } from "../components/card/components"
import { ProfileCard } from "../components/card/profile.card"
import { Divider } from "../components/layout"
import { ITipsRoute, tipsRoutes } from "../utils/tips.routes"
import image from "./../assets/image/image.jpg"
import { useNavigate } from "react-router-dom"
import { SuggestionList } from "../components/list/suggestion.list"
import { PostList } from "../components/list/post.list"
import { mentors, postList } from "../constant/data"
import { MentorList } from "../components/list/mentor.list"

export const BlogPage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-row max-h-screen overflow-hidden">
            <div className="w-1/5 p-6 pr-0 flex flex-col space-y-8 items-center max-h-screen overflow-hidden">
                <ProfileCard/>
                <Card shadow='lg' style="rounded-lg w-11/12">
                    <CardHeader imageUrl={image}/>
                    <CardBody>
                        <CardBodyTitle>
                            Title
                        </CardBodyTitle>
                        <p className='text-customGray-400/80'>Molestias tempore fuga aspernatur animi, eos cupiditate perspiciatis minima obcaecati debitis?</p>
                        <CardActions>
                            <Button label='View' onClick={()=>console.log("")} type='button' variant='primary'/>
                        </CardActions>
                    </CardBody>
                </Card>
            </div>
            <Divider style="divider-horizontal max-h-screen overflow-hidden"/>
            <div className="w-3/5 flex flex-col items-center pt-8 pb-24 overflow-scroll">
                <PostButton style="rounded-full w-1/2"/>
                <PostList postList={postList}/>
            </div>
            <Divider style="divider-horizontal max-h-screen overflow-hidden"/>
            <div className="w-1/4 p-0 pt-6 max-h-screen overflow-hidden">
                <div className="cursor-pointer" onClick={()=>navigate("/info/it")}>
                    <h1 className="text-customBlue-800 text-lg">Lecons</h1>
                    <ul className="flex flex-col space-y-3 p-6">
                        {
                            tipsRoutes.map((tip:ITipsRoute, index:number)=>(
                                <li className="flex flex-row items-center space-x-2 text-customGray-300" key={index}>
                                    <FaHashtag/>
                                    <p className="text-customGray-300">{tip.title}</p>
                                </li>         
                            ))
                        }
                    </ul>
                </div>
                <Divider style="after:bg-customGray-300/5 before:bg-customGray-300/5"/>
                <div className="flex flex-col space-y-8">
                    <div className="flex flex-col space-y-7">
                        <h1 className="text-customBlue-800 text-lg">Suggestion de mentor</h1>
                        <MentorList mentorList={mentors}/>
                    </div>
                    <div className="flex flex-col space-y-7">
                        <h1 className="text-customBlue-800 text-lg">Suggestion d'amis</h1>
                        <SuggestionList/>
                    </div>
                </div>
            </div>
        </div>
    )
}
