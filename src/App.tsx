import { Suspense, useState } from "react"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { Counter } from "./components/Counter"
import "./styles/index.scss"
import { AboutPageAsync } from "./pages/AboutPage/AbotPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./utils/classNames/classNames"

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <div>Adadw</div>
        <button onClick={toggleTheme}>Change Theme</button>
        <Link to="/">Main page</Link>
        <Link to="/about">About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        <Counter />
    </div>
}