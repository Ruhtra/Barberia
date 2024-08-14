import { Search } from "@/components/ui/Search"
import { useSearchParams } from "react-router-dom"
import { Artwork, CardBarber } from "../Index/CardBarber"

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
export function BarbersRoute() {
    const [useParams, _setUseParams] = useSearchParams()

    return (
        <div className="space-y-6 p-5">
            <Search />

            <div className="grid grid-cols-2 gap-4">
                {works
                    .filter(
                        (e) =>
                            useParams
                                .get("search")
                                ?.toLocaleLowerCase()
                                ?.indexOf(e.artist.toLowerCase()) != -1,
                    )
                    .map((e) => {
                        return <CardBarber work={e} />
                    })}
            </div>
        </div>
    )
}
