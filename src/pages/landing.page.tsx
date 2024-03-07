import { SideCard } from "../components/card/side.card"
import { IInfoCard, infoCard } from "../constant/info.card"
// import image from '../assets/image/kbd.jpg'
import image from '../assets/image/code.jpg'
import { Button } from "../components/button"
import { FullCard } from "../components/card/full.card"
import { useNavigate } from "react-router-dom"
import { Footer } from "../components/footer/footer"
import { Divider } from "../components/layout"

export const LandingPage = () => {
    const navigate = useNavigate()
    // const image = "src/assets/image/kbd.jpg"
    return (
        <>
            <div className="flex flex-col items-center space-y-16 mb-24">
                {
                    infoCard.map((infoCard:IInfoCard, index:number) =>(
                        <SideCard image={infoCard.image} reverse={infoCard.reverse} title={infoCard.title} key={index}>
                            {infoCard.description}
                        </SideCard>
                    ))
                }
            </div>
            <FullCard url={image}>
                    <div className="flex flex-col space-y-5 w-[35%] px-10">
                        <h1 className="text-3xl text-customBlue-100 font-semibold">Explorer l'univers de l'informatique et la vie estudiantine.</h1>
                        <Button label="Explorer" onClick={()=>navigate("/blog")} type="button" variant="primary"/>
                    </div>
            </FullCard>
            {/* <Divider/> */}
            <Footer/>
            {/* <PreviewCard/>
            <PreviewProfile/> */}
        </>
    )
}
