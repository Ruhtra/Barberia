import { Button } from "../shadcn/ui/button"
import { ScrollArea, ScrollBar } from "../shadcn/ui/scroll-area"

export type HHoursProps = {
    fn: (time: string) => void
    sT: string | null
}
export function HHours({ fn, sT }: HHoursProps) {
    return (
        <ScrollArea className="w-full">
            <div className="flex h-full gap-3 p-6">
                {[
                    "08:00",
                    "08:30",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                ].map((e) => {
                    return (
                        <Button
                            variant={sT == e ? "default" : "secondary"}
                            className="font-no rounded-full p-4 text-xs"
                            onClick={() => fn(e)}
                        >
                            {e}
                        </Button>
                    )
                })}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
