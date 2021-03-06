import React from 'react'
import { Footer } from './partials/Footer.comp'
import { Header } from './partials/Header.comp'

export const DefaultLayout = (props) => {
    return (
        <div>
        <div className="default-layout">
        <header className="header mb-2">
            <Header/>
        </header>

        <main className="main">
            {props.children}

        </main>

        <footer className="footer">
            <Footer/>

        </footer>
        </div>
        </div>
    )
}
