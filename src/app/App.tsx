import "./styles/index.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "./providers/ThemeProvider"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <AppRouter />
        <button onClick={toggleTheme}>Change Theme</button>
    </div>
}
