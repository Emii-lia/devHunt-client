import { INavRoute } from "../../types/nav.types"
import { navRoutes } from "../../utils/nav.routes"
import { LinkNavigation } from "../navigation"
import { TopNav } from "../navigation/top.nav"
import logo from '../../assets/logo.png'
import { Button } from "../button"

export const Header = () => {
  return (
    <header>
        <TopNav logo={logo}>
                {
                    navRoutes.map((navRoute:INavRoute, index:number) =>(
                        <LinkNavigation to={navRoute.path} label={navRoute.label}  key={index}/>
                    ))
                }
        </TopNav>
        <div className="hero min-h-screen relative" style={{backgroundImage: 'url(src/assets/image/bg.jpg)'}}>
            <div className="hero-overlay bg-opacity-60 "></div>
            <div className="hero-content text-center text-customBlue-100">
                <div className="max-w-2xl flex flex-col items-center">
                    <h1 className="mb-5 text-6xl font-bold">Bienvenu à l'ENI.</h1>
                    <p className="mb-5">Explorer les les guides et aides des veterans, les divers informations; trouver des amis partageant les même intérêts que vous.</p>
                    <Button label="Commencer" onClick={()=>console.log("")} type="button" variant="primary" size="large"/>
                </div>
            </div>
            <div className="w-screen absolute bottom-0 left-0 m-0 p-0" /* style={{backgroundImage:'url(src/assets/wave.svg)'}} */>
                <img src="src/assets/wave.svg" alt="" className="m-0 p-0 w-screen"/>
            </div>
        </div>
    </header>
  )
}
