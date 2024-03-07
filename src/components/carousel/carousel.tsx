import { IPart } from "../../types/card.type"

type CarouselProps = {
    partList:IPart[]
}
export const Carousel = ({partList}:CarouselProps) => {
  return (
    <div className="carousel carousel-center max-w-xl h-80 p-4 space-x-4  rounded-box flex flex-row items-center">
        {
            partList.map((part:IPart,index:number) => (
                <div className="carousel-item flex flex-col  items-center space-y-4" key={index}>
                    <img src={part.imageUrl} className="rounded-box w-full" />
                    <h1 className="text-primary-700/80 font-semibold">{part.title}</h1>
                </div> 
            ))
        }
    </div>
  )
}
