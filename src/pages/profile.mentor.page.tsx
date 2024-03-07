import { useNavigate, useParams } from "react-router-dom"
import { Timeline } from "../components/timeline"
import Avatar from "../components/userProfile/components/avatar/avatar"
import { Badge } from "../components/badge"
import { FaFacebook, FaGithub, FaLinkedin, FaMessage, FaX } from "react-icons/fa6"
import { IMentor, INovice, ISuccessStory } from "../types/user.types"
import avatar from "./../assets/image/dio.jpg"
import image from "../assets/image/code.jpg"
import { PostCard } from "../components/card/post.card"
import { IPost } from "../types/post.types"
import { Button } from "../components/button"

export const ProfileMentorPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const user:IMentor = {
        firstname:"John",
      lastname:"Doe",
      level:"M1",
      parcours:"IG",
      matricule:"6969",
      profileUrl:avatar,
      contact1:"John Doe",
      contact2:"John Doe",
      contact3:"john_doe",
      description:"John Doe and Doe Doe are the same profile image with different attributes and different attributes for different users and organizations",
      successStory:{
        createdAt:new Date(),
        reactionCount:10,
        description:"John Doe and Doe Doe are the same profile image with different attributes and different attributes for different users and organizations and organizations",
        media:image,
      },
      specialisation:{
        label:"Administrateur systeme",
        description:"Administrateur systeme is the same profile image with different attributes and different attributes for different users and organizations"
      }
    }
    const post:IPost = {
        createdAt:user.successStory?.createdAt!,
        reactionCount:user.successStory?.reactionCount!,
        description:user.successStory?.description,
        media:user.successStory?.media,
        user:user
    }
    return (
        <div className="w-full h-screen flex flex-col items-center pt-16 backdrop-blur-md" >
        <div className="w-4/5 shadow-md">
            <div className="flex flex-row justify-end items-center bg-gradient-to-b from-primary-500 to-primary-100 rounded-t-xl h-[30vh] w-full relative">
                <span className="absolute right-6 top-6 cursor-pointer" onClick={()=>navigate("/blog")}>
                    <FaX/>
                </span>
            <div className="flex flex-col space-y-6 px-16">
                      {
                        user.contact1 &&
                        <Badge variant="info" style="gap-1.5 cursor-pointer p-3 bg-primary-600 text-primary-100" size="large">
                            <FaFacebook/>
                            {user.contact1}
                        </Badge>
                      }
                      {
                        user.contact2 &&
                        <Badge variant="info" style="gap-1.5 cursor-pointer p-3 bg-primary-600 text-primary-100" size="large">
                          <FaLinkedin/>
                          {user.contact2}
                        </Badge>
                      }
                      {
                        user.contact3 &&
                        <Badge variant="info" style="gap-1.5 cursor-pointer p-3 bg-primary-600 text-primary-100" size="large">
                          <FaGithub/>
                          {user.contact3}
                        </Badge>
                      }
                    </div>
            </div>
            <div className="relative bg-[#F8F7F4] pb-16">
                <div className="flex flex-row items-end justify-between space-x-3 absolute top-0 left-0 -translate-y-1/2 px-16 w-full">
                    <div className="flex flex-row items-end space-x-3">
                        <div className="w-fit h-fit rounded-full border-4 border-[#F8F7F4]">
                            <Avatar url={user.profileUrl!} size="2xlarge"/>
                        </div>
                        <div className="">
                            <h1 className="text-2xl text-customBlue-800 font-semibold">{user.firstname+" "+user.lastname}</h1>
                            <p className="text-lg text-customGray-300 font-semibold">{user.level+" "+user.parcours}</p>
                        </div>
                    </div>
                    <Button label="Message" onClick={()=>navigate("/messages/"+id)} type="button" variant="primary" leftIcon={<FaMessage/>} size="large"/>
                </div>
                <div className="pt-44 px-36 space-y-10 flex flex-col items-center w-full">
                  <Timeline child1={
                    <div className="flex flex-col space-y-2 shadow-lg p-6 rounded-xl bg-primary-100">
                      <h2 className="text-2xl ">A propos de moi</h2>
                      <p className="text-customGray-300 ">{user.description}</p>
                    </div>
                  } child2={
                    <div className="space-y-4 shadow-lg p-6 rounded-xl bg-primary-100">
                          <h2 className="text-2xl">Experience</h2>
                          <div className="space-x-3 space-y-3">
                            {
                                user &&
                                <PostCard post={post}/>
                            }
                          </div>
                      </div>
                  } child3={
                    <div className="space-y-4 shadow-lg p-6 rounded-xl bg-primary-100">
                        <h2 className="text-2xl ">Specialisation</h2>
                        <div className="">
                            <h2 className="text-xl">{user.specialisation?.label}</h2>
                            <p className="text-customGray-300">{user.specialisation?.description}</p>
                        </div>
                    </div>
                  }/>
                </div>
            </div>
        </div>
      </div>
    )
}
