type StatusProps = {
    status: "active"|"offline"|"live"|"quiet"
    size:number
}
export const Status = ({status="offline", size}:StatusProps) => {
    let color
    let StatusSize = `w-${size} h-${size} p-${size/2}`
    switch (status) {
        case "active":
            color = "border-[#ddd]  border-[1.5px] bg-[#64DD17] text-[#64DD17]"
            break;
    
        case "offline":
            color = "border-[#ddd]  border-[1.5px] bg-[#B0BEC5] text-[#B0BEC5]"
            break;
    
        case "live":
            color = "border-[#ddd]  border-[1.5px] bg-purple-700 text-purple-700"
            break;
    
        case "quiet":
            color = "border-[#ddd]  border-[1.5px] bg-amber-400 text-amber-400"
            break;
    
        default:
            color = "border-[#ddd]  border-[1.5px] bg-customGray-200 text-customGray-200"
            break;
    }
    return (
        <span className={`rounded-full flex flex-col justify-center items-center text-center ${StatusSize} ${color}`}>
            
        </span>
    )
}
