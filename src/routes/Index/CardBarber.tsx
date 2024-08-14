import { Badge } from "@/components/shadcn/ui/badge"
import { Button } from "@/components/shadcn/ui/button"
import { Card, CardContent } from "@/components/shadcn/ui/card"
import { StarIcon } from "lucide-react"

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
                <Button className="mt-auto rounded-xl" variant={"secondary"}>
                    Reservar
                </Button>
            </div>
        </Card>
    )
}
