import { Outlet } from "react-router-dom"
import { Header } from "../../header/header"

export const MainLayout = () => {
  return (
    <main>
        <Header/>
        <section className="pt-36">
            <Outlet/>
        </section>
    </main>
  )
}
