import { useFetchUserByMatricule } from "../../../../hooks/user.hooks"
import { useEffect, useState } from "react"
import { IMentor, INovice } from "../../../../types/user.types"
import { Badge } from "../../../badge"
import { FaFacebook } from "react-icons/fa"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { Divider } from "../../../layout"
import { UserInfo } from "./user.info.card"

type ContactCardProps = {
    user:INovice
}
export const ContactCard = ({user}:ContactCardProps) => {
    // const {id} = useParams()
    // const [user, setUser] = useState<IMentor|INovice>({} as IMentor|INovice)
    // const {data} = useFetchUserByMatricule(id!)
    // useEffect(()=>{
    //     setUser(data?.data.user)
    // })
    // const user:INovice = {
    //     firstname:"Lia",
    //     lastname: "Tan",
    //     profileUrl:null,
    //     level:"L3",
    //     matricule:"6969",
    //     parcours:"GB",
    //     contact1:"liaTan",
    //     contact2:"Lia Tan",
    //     contact3:"lia_tan",
    //     description:"this is just a long description about the user that is shown here",
    // }
    return (
        <div className="flex flex-col space-y-3">
            <div className="flex flex-row space-x-3">
                <UserInfo url={user.profileUrl} username={user.firstname+" "+user.lastname} role={user.level+user.parcours} size="xlarge"/>
            </div>
            <Divider/>
            {
                user.description &&
                <div className="pl-1 text-customGray-400/80 text-[0.95rem]">
                    <p>{user.description}</p>
                </div>
            }
            <Divider/>
            <div className="flex flex-row space-x-4 items-center">
                {
                    user.contact1 &&
                    <Badge variant="accent" style="gap-1.5 cursor-pointer p-3" size="large">
                        <FaFacebook/>
                        {user.contact1}
                    </Badge>
                }
                {
                    user.contact2 &&
                    <Badge variant="accent" style="gap-1.5 cursor-pointer p-3" size="large">
                        <FaLinkedin/>
                        {user.contact2}
                    </Badge>
                }
                {
                    user.contact3 &&
                    <Badge variant="accent" style="gap-1.5 cursor-pointer p-3" size="large">
                        <FaGithub/>
                        {user.contact3}
                    </Badge>
                }
            </div>

        </div>
    )
}
