import { Route, Routes } from "react-router-dom"
import { IndexRoute } from "./routes/Index/IndexRoute"
import { NavBar } from "./components/ui/NvarBar"
import "./index.css"
import { Footer } from "./components/ui/Footer"
import { BarberRoute } from "./routes/Barber/BarberRoute"
import { Toaster } from "sonner"
import { BarbersRoute } from "./routes/Barbers/BarbersRoute"

function Render() {
    return (
        <Routes>
            <Route path="/" element={<IndexRoute />} />
            <Route path="/barber" element={<BarberRoute />} />
            <Route path="/barbers" element={<BarbersRoute />} />
        </Routes>
    )
}

export function App() {
    return (
        <>
            <div className="layout h-full flex-1">
                <NavBar />
                <Render />
                <Toaster />
                <Footer />
            </div>
        </>
    )
}
