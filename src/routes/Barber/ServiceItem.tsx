import { Button } from "@/components/shadcn/ui/button"
import { Card, CardContent } from "@/components/shadcn/ui/card"

export function ServiceItem() {
    return (
        <Card>
            <CardContent className="flex gap-3 p-3">
                <img
                    className="aspect-square h-36 w-36 rounded-xl"
                    src="https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"
                    alt=""
                />
                <div className="flex w-full flex-col p-0">
                    <h4 className="truncate text-xl font-bold">
                        Corte de Cabelo
                    </h4>
                    <p className="text-gray-400">
                        Estilo personalizado com as últimas tendências.
                    </p>
                    <div className="mt-auto flex w-full items-center justify-between">
                        <p className="font-bold text-primary">
                            R${" "}
                            {Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(45)}
                        </p>
                        <Button className="rounded-xl" variant={"secondary"}>
                            Reservar
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
