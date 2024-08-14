import Logo from "@/assets/Logo.svg"
import { Card, CardContent } from "../shadcn/ui/card"
import { Button } from "../shadcn/ui/button"
import {
    CalendarDays,
    Eye,
    HouseIcon,
    LogIn,
    LogOut,
    MenuIcon,
    Scissors,
} from "lucide-react"
import { Link } from "react-router-dom"
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../shadcn/ui/sheet"
import { Mustache } from "@/assets/Mustache"
import { RazorBlade } from "@/assets/RazorBlade"
import { TowelRack } from "@/assets/TowelRack"
import { BottleDispenser } from "@/assets/BottleDispenser"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../shadcn/ui/dialog"

export function NavBar() {
    return (
        <nav>
            <Card>
                <CardContent className="flex justify-between p-5">
                    <Link to={"/"} className="flex items-center justify-center">
                        <img src={Logo} alt="Logo" className="cursor-pointer" />
                    </Link>
                    <Sheet>
                        <SheetTrigger>
                            <Button variant={"outline"} size={"icon"}>
                                <MenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side={"right"}>
                            <SheetHeader>
                                <SheetTitle className="text-left">
                                    Menu
                                </SheetTitle>
                            </SheetHeader>
                            <div className="py-2">
                                <div className="flex items-center gap-3 border-b-2 py-6">
                                    <h2 className="font-bold">
                                        Olá. Faça seu login!
                                    </h2>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button
                                                size={"icon"}
                                                variant={"secondary"}
                                                className="ml-auto"
                                            >
                                                <LogIn />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Faça login na plataforma
                                                </DialogTitle>
                                                <DialogDescription>
                                                    Conecte-se usando sua conta
                                                    do Googl.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <Button
                                                variant={"outline"}
                                                className="gap-2 font-bold"
                                            >
                                                <LogIn /> Google
                                            </Button>
                                        </DialogContent>
                                    </Dialog>
                                    {/* <Avatar className="box-content border-2 border-primary">
                                        <AvatarImage
                                            src="https://github.com/shadcn.png"
                                            alt="@shadcn"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="w-full">
                                        <h2 className="text-lg font-semibold">
                                            Pedro Golçalves
                                        </h2>
                                        <p className="text-xs">
                                            pedroGolçalves@gmail.com
                                        </p>
                                    </div> */}
                                </div>
                                <div className="flex flex-col gap-3 border-b-2 py-6">
                                    <Button
                                        className="rounded-x2 flex items-center justify-start gap-3"
                                        variant={"ghost"}
                                        asChild
                                    >
                                        <Link to={"/"}>
                                            <HouseIcon />
                                            <p className="font-normal">
                                                Ínicio
                                            </p>
                                        </Link>
                                    </Button>
                                    <Button
                                        className="rounded-x2 flex items-center justify-start gap-3"
                                        variant={"ghost"}
                                    >
                                        <CalendarDays />
                                        <p className="font-normal">
                                            Agendamentos
                                        </p>
                                    </Button>
                                </div>
                                <div className="flex flex-col border-b-2 py-6">
                                    <Button
                                        className="rounded-x2 flex items-center justify-start gap-3"
                                        variant={"ghost"}
                                    >
                                        <Scissors />
                                        <p className="font-normal">Cabelo</p>
                                    </Button>
                                    <Button
                                        className="rounded-x2 flex items-center justify-start gap-3"
                                        variant={"ghost"}
                                    >
                                        <Mustache className="fill-white" />
                                        <p className="font-normal">Barba</p>
                                    </Button>
                                    <Button
                                        className="rounded-x2 flex items-center justify-start gap-3"
                                        variant={"ghost"}
                                    >
                                        <RazorBlade />
                                        <p className="font-normal">
                                            Acabamento
                                        </p>
                                    </Button>
                                    <Button
                                        className="rounded-x2 flex items-center justify-start gap-3"
                                        variant={"ghost"}
                                    >
                                        <Eye />
                                        <p className="font-normal">
                                            Sobrancelha
                                        </p>
                                    </Button>
                                    <Button
                                        className="rounded-x2 flex items-center justify-start gap-3"
                                        variant={"ghost"}
                                    >
                                        <TowelRack />
                                        <p className="font-normal">Massagem</p>
                                    </Button>
                                    <Button
                                        className="rounded-x2 flex items-center justify-start gap-3"
                                        variant={"ghost"}
                                    >
                                        <BottleDispenser />
                                        <p className="font-normal">
                                            Hidratação
                                        </p>
                                    </Button>
                                </div>
                                <SheetFooter className="py-6">
                                    <Button
                                        className="rounded-x2 flex items-center justify-start gap-3"
                                        variant={"ghost"}
                                    >
                                        <LogOut />
                                        <p className="font-normal">
                                            Sair da conta
                                        </p>
                                    </Button>
                                </SheetFooter>
                            </div>
                        </SheetContent>
                    </Sheet>
                </CardContent>
            </Card>
        </nav>
    )
}
