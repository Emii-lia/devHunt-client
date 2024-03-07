import { Outlet } from "react-router-dom"
import { BlogTopNav } from "../../navigation/blog.top.nav"
import logo from '../../../assets/logo.png'
import { IBlogNav, blogNav } from "../../../utils/blog.nav.routes"
import { LinkNavigation } from "../../navigation"


export const BlogLayout = () => {
  return (
    <main>
        <BlogTopNav logo={logo}>
            {
                blogNav.map((nav:IBlogNav, index:number) =>(
                    <LinkNavigation to={nav.to} icon={nav.icon} key={index}/>
                ))
            }
        </BlogTopNav>
        <section className="max-h-screen overflow-hidden pt-24">
            <Outlet/>
        </section>
    </main>
  )
}
