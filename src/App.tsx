import { Route, Routes } from "react-router-dom"
import { IndexRoute } from "./routes/Index/IndexRoute"
import { NavBar } from "./components/ui/NvarBar"
import "./index.css"
import { Footer } from "./components/ui/Footer"
import { BarberRoute } from "./routes/Barber/BarberRoute"

function Render() {
    return (
        <Routes>
            <Route path="/" element={<IndexRoute />} />
            <Route path="/barber" element={<BarberRoute />} />
        </Routes>
    )
}

export function App() {
    return (
        <>
            <div className="layout">
                <NavBar />
                <Render />
                <Footer />
            </div>
        </>
    )
}
