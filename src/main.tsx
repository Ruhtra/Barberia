import { createRoot } from "react-dom/client"
import { App } from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./components/shadcn/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <App />
        </ThemeProvider>
    </BrowserRouter>,
)
