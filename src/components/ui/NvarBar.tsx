import Logo from "@/assets/Logo.svg"
import { Card, CardContent } from "../shadcn/ui/card"
import { Button } from "../shadcn/ui/button"
import { MenuIcon } from "lucide-react"
import { Link } from "react-router-dom"

export function NavBar() {
    return (
        <nav>
            <Card>
                <CardContent className="flex justify-between p-5">
                    <Link to={"/"} className="flex items-center justify-center">
                        <img src={Logo} alt="Logo" className="cursor-pointer" />
                    </Link>
                    <Button variant={"outline"} size={"icon"}>
                        <MenuIcon />
                    </Button>
                </CardContent>
            </Card>
        </nav>
    )
}
