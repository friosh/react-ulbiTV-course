import "./styles/index.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "./providers/ThemeProvider"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"

export const App = () => {
    const { theme } = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <AppRouter />
    </div>
}
