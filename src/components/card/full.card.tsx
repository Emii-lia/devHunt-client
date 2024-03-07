type FullCardProps = {
    url:string
    children:React.ReactNode
}
export const FullCard = ({url, children}:FullCardProps) => {
  return (
    <div className="relative w-full my-10">
        <img src={url} alt="" className="object-cover w-full h-[50vh]"/>
        <div className="w-full h-full bg-customGray-500/50 absolute top-0 bg-fixed" style={{backgroundImage:`url(${url})`}}>
            <div className="w-full h-full backdrop-blur-sm flex justify-start items-center">
                {children}
            </div>
        </div>
    </div>
  )
}