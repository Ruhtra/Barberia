import { ScrollAreaHorizontalDemo } from "./ScrollHorizontal"
import { OptionsSearch } from "./OptionsSearch"
import { BookingItem } from "./BookingItem"
import { Search } from "@/components/ui/Search"

export function IndexRoute() {
    return (
        <>
            <div className="p-5">
                <h2 className="text-xl font-bold">Olá, Arthur</h2>
                <p>Segunda-feira, 06 de agosto.</p>

                {/* Search */}
                <div className="my-6">
                    <Search />
                </div>

                <OptionsSearch />

                {/* Banner */}
                <div className="relative my-6 h-[150px] w-full">
                    <img
                        src="/Banner-01.png"
                        className="h-full w-full rounded-xl object-cover"
                    />
                </div>

                {/* Booking */}
                <div className="my-6">
                    <h2 className="mb-3 text-sm uppercase text-gray-400">
                        Agendamentos
                    </h2>
                    <BookingItem />
                </div>

                {/* Scrollers */}
                <div className="my-6">
                    <h2 className="mb-3 text-sm font-semibold uppercase text-gray-400">
                        Recomendados
                    </h2>
                    <ScrollAreaHorizontalDemo />
                </div>

                <div className="my-6">
                    <h2 className="mb-3 text-sm uppercase text-gray-400">
                        Populares
                    </h2>
                    <ScrollAreaHorizontalDemo />
                </div>
            </div>
        </>
    )
}
