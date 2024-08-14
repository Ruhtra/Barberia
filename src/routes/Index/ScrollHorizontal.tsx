import { Badge } from "@/components/shadcn/ui/badge"
import { Button } from "@/components/shadcn/ui/button"
import { Card, CardContent } from "@/components/shadcn/ui/card"
import { ScrollArea, ScrollBar } from "@/components/shadcn/ui/scroll-area"
import { StarIcon } from "lucide-react"

export interface Artwork {
    artist: string
    art: string
    address: string
    score: number // Pontuação entre 0.0 e 5.0
}

export const works: Artwork[] = [
    {
        artist: "Ornella Binni",
        art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        address: "Rome, Italy",
        score: 4.5, // Exemplo de pontuação
    },
    {
        artist: "Tom Byrom",
        art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        address: "London, England, Barbearia Los Hermando",
        score: 4.8, // Exemplo de pontuação
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        address: "Minsk, Belarus",
        score: 4.2, // Exemplo de pontuação
    },
]

export function ScrollAreaHorizontalDemo() {
    return (
        <ScrollArea className="w-full">
            <div className="flex gap-3 pb-2">
                {works.map((work) => {
                    return (
                        <Card className="flex flex-col rounded-2xl p-1">
                            <CardContent className="p-0">
                                <div className="relative w-40">
                                    <Badge
                                        variant={"secondary"}
                                        className="absolute left-1 top-1 space-x-1 py-1"
                                    >
                                        <StarIcon
                                            className="fill-primary text-primary"
                                            size={12}
                                        />
                                        <span className="text-xs font-semibold">
                                            {work.score
                                                .toString()
                                                .replace(".", ",")}
                                        </span>
                                    </Badge>
                                    <img
                                        src={work.art}
                                        className="aspect-square w-full rounded-2xl object-cover"
                                    />
                                </div>
                            </CardContent>
                            <div className="flex h-full w-full flex-col gap-1 p-2">
                                <h3 className="m-0 truncate font-semibold">
                                    {work.artist}
                                </h3>
                                <p className="mb-1 text-xs text-gray-400">
                                    {work.address}
                                </p>
                                <Button
                                    className="mt-auto rounded-xl"
                                    variant={"secondary"}
                                >
                                    Reservar
                                </Button>
                            </div>
                        </Card>
                    )
                })}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
