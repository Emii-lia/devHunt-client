import React from "react";
import { RxAvatar } from "react-icons/rx";
import { Status } from "../status/status";

type AvatarProps = {
    url: string | null
    style?: string
    size?:"small" | "medium" | "large"|"xlarge"|"2xlarge"
    status?:"active"|"offline"|"live"|"quiet"
};
export default function Avatar (props: AvatarProps) {
    const { url,style, size="medium", status} = props;
    const hasAvatar = url !== null && url !== undefined;
    let avatarSizeNum;
    let badgeSize:number
    switch (size) {
        case "small":
            avatarSizeNum=44
            badgeSize=3
            break;
            
        case "medium":
            avatarSizeNum=52
            badgeSize=3
            break;
            
        case "large":
            avatarSizeNum=66
            badgeSize=4
            break;
            
        case "xlarge":
            avatarSizeNum=94
            badgeSize=4
            break;
            
        case "2xlarge":
            avatarSizeNum=160
            badgeSize=4
            break;
            
        default:
            avatarSizeNum=52
            badgeSize=3
            break;
    }
    return (
        <React.Fragment>
            {
                hasAvatar ?
                    <span className={`rounded-full ${style} w-fit relative`}>
                            <img src={url} alt="user avatar" className={`rounded-full bg-cover border-2 border-white`} width={avatarSizeNum} />
                            {
                                status &&
                                <span className="absolute bottom-0 right-0.5 flex flex-col justify-start items-center">
                                    <Status size={badgeSize} status={status}/>
                                </span>
                            }
                    </span>
                :
                <span className={`rounded-full  ${style} text-customGray-300 h-fit w-fit relative`}>
                    <RxAvatar style={{fontSize:avatarSizeNum*1.015}}/>
                    {
                        status &&
                        <span className="absolute bottom-0.5 right-1 flex flex-col justify-start items-center">
                            <Status size={badgeSize} status={status}/>
                        </span>
                    }
                </span>

            }
        </React.Fragment>
    );
}