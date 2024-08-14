import { SearchIcon } from "lucide-react"
import { Button } from "../shadcn/ui/button"
import { Input } from "../shadcn/ui/input"
import { Link } from "react-router-dom"
import { useState } from "react"

export type SearchProps = {
    value?: string
}

export function Search() {
    const [search, setSearch] = useState("")

    return (
        <div className="flex justify-between gap-2">
            <Input
                placeholder="Faça sua busca..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button asChild>
                <Link to={"/barbers?search=" + search}>
                    <SearchIcon />
                </Link>
            </Button>
        </div>
    )
}
