import { Badge } from "@/components/shadcn/ui/badge"
import { Card, CardContent } from "@/components/shadcn/ui/card"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"

export function BookingItem() {
    return (
        <Card>
            <CardContent className="flex justify-between p-0">
                <div className="flex flex-col gap-2 p-4">
                    <Badge className="w-fit">Confirmado</Badge>
                    <h3 className="font-semibold">Corte de Cabelo</h3>
                    <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src="/Banner-01.png" />
                        </Avatar>
                        <p className="text-sm">Ruhtra Barbearia</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border-l-2 border-solid px-4">
                    <p className="text-sm">Fevereiro</p>
                    <p className="text-2xl">06</p>
                    <p className="text-sm">09:45</p>
                </div>
            </CardContent>
        </Card>
    )
}
