import { useSearchParams } from "react-router-dom"
import { MapPin, Smartphone, StarIcon } from "lucide-react"
import { Button } from "@/components/shadcn/ui/button"
import { ServiceItem } from "./ServiceItem"
import { toast } from "sonner"

export function BarberRoute() {
    const [searchParams] = useSearchParams()
    if (searchParams.get("id") == null) return <h2>Parametros não definidos</h2>

    return (
        <div>
            <img
                className="aspect-video w-full object-cover"
                src="https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"
                alt=""
            />

            <div className="space-y-4 border-b-2 p-4">
                <h1 className="text-2xl font-semibold">Vintage Barber</h1>
                <h3 className="flex gap-2">
                    <MapPin className="text-primary" />
                    <span>Avenida São sebastião,357, São Paulo</span>
                </h3>
                <h3 className="flex gap-2">
                    <StarIcon className="fill-primary text-primary" />
                    <span>5,0 (889 avaliações)</span>
                </h3>
            </div>

            <div className="space-y-3 p-4">
                <h3 className="font-semibold uppercase text-gray-400">
                    Sobre nós
                </h3>
                <p className="text-justify">
                    Bem-vindo à Vintage Barber, onde tradição encontra estilo.
                    Nossa equipe de mestres barbeiros transforma cortes de
                    cabelo e barbas em obras de arte. Em um ambiente acolhedor,
                    promovemos confiança, estilo e uma comunidade unida.
                </p>
            </div>

            <div className="space-y-3 border-y-2 p-4">
                <h3 className="font-semibold uppercase text-gray-400">
                    Serviços
                </h3>
                <div className="flex flex-col gap-3">
                    {[1, 2, 3, 4, 5, 6].map((_e, i) => {
                        return <ServiceItem key={i} />
                    })}
                </div>
            </div>

            <div className="mb-8 space-y-3 p-4">
                <h3 className="font-semibold uppercase text-gray-400">
                    Contato
                </h3>
                {["1", "2"].map((_e, i) => {
                    return (
                        <div key={i} className="flex items-center gap-3">
                            <Smartphone />
                            <p>(11) 99999-5151</p>
                            <Button
                                onClick={() => {
                                    toast(
                                        "Copiado para área de transferência.",
                                        {
                                            description: "11 99999-5191",
                                        },
                                    )
                                    navigator.clipboard.writeText(
                                        "11 99999-5191",
                                    )
                                }}
                                className="ml-auto"
                                variant={"secondary"}
                            >
                                Copiar
                            </Button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
