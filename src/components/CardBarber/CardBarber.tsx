import { Badge } from "@/components/shadcn/ui/badge"
import { Button } from "@/components/shadcn/ui/button"
import { Calendar } from "@/components/shadcn/ui/calendar"
import { Card, CardContent } from "@/components/shadcn/ui/card"
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/shadcn/ui/sheet"
import { ptBR } from "date-fns/locale"
import { StarIcon } from "lucide-react"
import { HHours } from "./HHours"
import { useState } from "react"
import { format } from "date-fns"

export interface Artwork {
    artist: string
    art: string
    address: string
    score: number // Pontuação entre 0.0 e 5.0
}

export type CardBarberProps = {
    work: Artwork
}

export function CardBarber({ work }: CardBarberProps) {
    const [selectDay, setSelectDay] = useState<Date | undefined>(undefined)
    const [selectTime, setSelectTime] = useState<string | null>(null)

    function handleDateSelect(date: Date | undefined) {
        setSelectDay(date)
    }

    function handleTimeSelect(time: string) {
        setSelectTime(time)
    }

    return (
        <Card className="flex min-w-40 flex-col rounded-2xl p-1">
            <CardContent className="p-0">
                <div className="relative w-full">
                    <Badge
                        variant={"secondary"}
                        className="absolute left-1 top-1 space-x-1 py-1"
                    >
                        <StarIcon
                            className="fill-primary text-primary"
                            size={12}
                        />
                        <span className="text-xs font-semibold">
                            {work.score.toString().replace(".", ",")}
                        </span>
                    </Badge>
                    <img
                        src={work.art}
                        className="aspect-square w-full rounded-2xl object-cover"
                    />
                </div>
            </CardContent>
            <div className="flex h-full w-full flex-col gap-1 p-2">
                <h3 className="m-0 truncate font-semibold">{work.artist}</h3>
                <p className="mb-1 text-xs text-gray-400">{work.address}</p>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            className="mt-auto rounded-xl"
                            variant={"secondary"}
                            size={"sm"}
                        >
                            Reservar
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="px-0">
                        <SheetHeader>
                            <SheetTitle>Fazer Reserva</SheetTitle>
                        </SheetHeader>
                        <div className="w-full px-3 py-6">
                            <Calendar
                                mode="single"
                                locale={ptBR}
                                selected={selectDay}
                                onSelect={handleDateSelect}
                                styles={{
                                    head_cell: {
                                        width: "100%",
                                        textTransform: "capitalize",
                                    },
                                    cell: {
                                        width: "100%",
                                    },
                                    button: {
                                        width: "100%",
                                    },
                                    nav_button_previous: {
                                        width: "32px",
                                        height: "32px",
                                    },
                                    nav_button_next: {
                                        width: "32px",
                                        height: "32px",
                                    },
                                    caption: {},
                                }}
                            />
                        </div>
                        {selectDay && (
                            <div className="w-full border-y-2">
                                <HHours sT={selectTime} fn={handleTimeSelect} />
                            </div>
                        )}
                        {selectDay && selectTime && (
                            <div className="p-6">
                                <Card className="">
                                    <CardContent className="space-y-2 p-3">
                                        <div className="flex justify-between">
                                            <h3 className="text-sm">
                                                Corte de Cabelo
                                            </h3>
                                            <p className="text-sm">
                                                {Intl.NumberFormat("pt-BR", {
                                                    style: "currency",
                                                    currency: "BRL",
                                                }).format(50)}
                                            </p>
                                        </div>

                                        <div className="flex justify-between">
                                            <p className="text-sm text-gray-500">
                                                Data
                                            </p>
                                            <p className="text-sm">
                                                {format(
                                                    selectDay,
                                                    "d 'de' MMMM",
                                                    {
                                                        locale: ptBR,
                                                    },
                                                )}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-sm text-gray-500">
                                                Horário
                                            </p>
                                            <p className="text-sm">
                                                {selectTime}
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-sm text-gray-500">
                                                Barbearia
                                            </p>
                                            <p className="text-sm">
                                                {work.artist}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                        <SheetFooter className="px-6">
                            <Button variant={"default"}>Confirmar</Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </Card>
    )
}
