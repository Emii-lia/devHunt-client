import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useFetchNoviceByMatriule } from "../hooks/novice.hooks"
import { INovice, IPassion } from "../types/user.types"
import Avatar from "../components/userProfile/components/avatar/avatar"
import { Badge } from "../components/badge"
import { FaFacebook, FaGithub, FaLinkedin, FaX } from "react-icons/fa6"
import image from '../assets/image/100790.png'
import { Timeline } from "../components/timeline"

export const ProfileNovicePage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    // const {data} = useFetchNoviceByMatriule(id!)
    // const [user, setUser] = useState<INovice>({} as INovice)

    // useEffect(()=>{
    //   setUser(data?.data.novice)
    // },[data])
    const user:INovice = {
      firstname:"Lia",
      lastname:"Tan",
      level:"L1",
      parcours:"IG",
      matricule:"6969",
      profileUrl:image,
      contact1:"Lia Tan",
      contact2:"Lia Tan",
      contact3:"lia_tan",
      description:"Lia Tan and Tan Tan are the same profile image with different attributes and different attributes for different users and organizations",
      passions:[
        {
          label:"Music",
        },
        {
          label:"Tea",
        },
        {
          label:"Snowboarding",
        },
        {
          label:"Hide-and-seek",
        },
        {
          label:"Picnic",
        },
        {
          label:"Programming",
        },
        {
          label:"Food",
        },
        {
          label:"Singing",
        },
      ]
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
            <div className="relative bg-[#F8F7F4] h-[63vh]">
                <div className="flex flex-row items-end space-x-3 absolute top-0 left-0 -translate-y-1/2 px-16">
                  <div className="w-fit h-fit rounded-full border-4 border-[#F8F7F4]">
                    <Avatar url={user.profileUrl!} size="2xlarge"/>
                  </div>
                  <div className="">
                    <h1 className="text-2xl text-customBlue-800 font-semibold">{user.firstname+" "+user.lastname}</h1>
                    <p className="text-lg text-customGray-300 font-semibold">{user.level+" "+user.parcours}</p>
                  </div>
                </div>
                <div className="pt-44 px-36 space-y-10 flex flex-col items-center w-full">
                  <Timeline child1={
                    <div className="flex flex-col space-y-2 shadow-lg p-6 rounded-xl bg-primary-100">
                      <h2 className="text-2xl ">A propos de moi</h2>
                      <p className="text-customGray-300 ">{user.description}</p>
                    </div>
                  } child2={
                    <div className="space-y-4 shadow-lg p-6 rounded-xl bg-primary-100">
                          <h2 className="text-2xl">Loisirs et interets</h2>
                          <div className="space-x-3 space-y-3">
                            {
                              user.passions!.map((passion:IPassion, index:number) => (
                                <Badge outline variant="neutral" key={index} size="large" style="border-customGray-200 text-customGray-200">{passion.label}</Badge>
                              ))
                            }
                          </div>
                      </div>
                  }/>
                </div>
            </div>
        </div>
      </div>
    )
}
