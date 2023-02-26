import { Suspense, useState } from "react"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import "./styles/index.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "./providers/ThemeProvider"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>Change Theme</button>
        <Link to="/">Main page</Link>
        <Link to="/about">About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
    </div>
}