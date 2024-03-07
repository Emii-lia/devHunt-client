import Avatar from "../avatar/avatar"

type UserInfoProps = {
    url: string|null,
    style?: string,
    size?: "small" | "medium" | "large"|"xlarge"
    username: string
    role?: string
    status?:"active"|"offline"|"live"|"quiet"
    children?:React.ReactNode
}
export const UserInfo = (props:UserInfoProps)=>{
    const {url, style, size="medium", username, role, status, children} = props
    let sizeTitle
    let sizeRole
    switch (size) {
        case "small":
            sizeTitle = "text-base"
            sizeRole = "text-sm"
            break;
            
        case "medium":
            sizeTitle = "text-lg"
            sizeRole = "text-base"
            break;
            
        case "large":
            sizeTitle = "text-xl"
            sizeRole = "text-lg"
            break;
            
        case "xlarge":
            sizeTitle = "text-2xl"
            sizeRole = "text-xl"
            break;
            
        default:
            sizeTitle = "text-lg"
            sizeRole = "text-base"
            break;
    }
    return(
        <div className="flex flex-row space-x-5 items-center">
            <Avatar url={url} size={size} style={style} status={status}/>
            <div className="flex flex-col justify-between">
                <h2 className={`${sizeTitle} font-semibold`}>{username}</h2>
                {
                    role &&
                    <p className={`text-customGray-200 ${sizeRole}`}>{role}</p>
                }
            </div>
            {children}
        </div>
    )
}