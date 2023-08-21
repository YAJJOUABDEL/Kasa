import React from 'react'
import Navbar from "./Navbar"
import Shaping from './Shaping'
import Banner from '../Components/Banner'
import Footer from "./Footer"
import Cards from '../Components/Cards'

import "../Styles/Home.css"

function Home() {
    return (
        <div role="main">
            <Navbar />
            <Shaping>
                <Banner>
                    <div className="banner banner-commun">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </Banner>
                <Cards />
            </Shaping>
            <Footer />
        </div>
    )
}

export default Home