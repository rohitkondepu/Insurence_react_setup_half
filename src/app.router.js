import { Route, Routes } from "react-router-dom"
import {Dashboard} from "./components/dashboard/dashboard"
import { LeadManagement } from "./components/lead-management/lead-management"


export const AppRouter = () => {
    return(
       <Routes>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/lead-management" element={<LeadManagement></LeadManagement>}></Route>
       </Routes>
    )
}