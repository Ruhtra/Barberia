import { Button } from "@/components/shadcn/ui/button"
import { ScrollArea, ScrollBar } from "@/components/shadcn/ui/scroll-area"
import Blade from "@/assets/Blade.svg"
import Eyebrow from "@/assets/Eyebrow.svg"
import Hydratation from "@/assets/Hydratation.svg"
import Moustache from "@/assets/Moustache.svg"
import Scissors from "@/assets/Scissors.svg"
import Towel from "@/assets/Towel.svg"

export function OptionsSearch() {
    return (
        <ScrollArea className="w-full">
            <div className="flex gap-3 pb-2">
                <Button variant={"secondary"} className="gap-2">
                    <img width={16} height={16} src={Scissors} />
                    Cabelo
                </Button>
                <Button variant={"secondary"} className="gap-2">
                    <img width={16} height={16} src={Moustache} />
                    Barba
                </Button>
                <Button variant={"secondary"} className="gap-2">
                    <img width={16} height={16} src={Blade} />
                    Acabamento
                </Button>
                <Button variant={"secondary"} className="gap-2">
                    <img width={16} height={16} src={Eyebrow} />
                    Sobranceha
                </Button>
                <Button variant={"secondary"} className="gap-2">
                    <img width={16} height={16} src={Towel} />
                    Massagem
                </Button>
                <Button variant={"secondary"} className="gap-2">
                    <img width={16} height={16} src={Hydratation} />
                    Hidratação
                </Button>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
