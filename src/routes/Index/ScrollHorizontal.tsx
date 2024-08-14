import { ScrollArea, ScrollBar } from "@/components/shadcn/ui/scroll-area"
import { Artwork, CardBarber } from "../../components/CardBarber/CardBarber"

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
                    return <CardBarber work={work} />
                })}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
