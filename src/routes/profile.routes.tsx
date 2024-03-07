import { Route, Routes } from "react-router-dom"
import { ProfileMentorPage } from "../pages/profile.mentor.page"
import { ProfileNovicePage } from "../pages/profile.novice.page"

export const ProfileRoute = () => {
  return (
    <Routes>
        <Route path="mentors/:id" element={<ProfileMentorPage/>}/>
        <Route path="novices/:id" element={<ProfileNovicePage/>}/>
    </Routes>
  )
}
