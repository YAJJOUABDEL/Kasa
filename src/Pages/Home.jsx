import React from 'react'
import Navbar from "./Navbar"
import Shaping from './Shaping'
import Banner from '../Components/Banner'
import Footer from "./Footer"
import Cards from '../Components/Cards'


import "../Styles/Home.css"

function Home() {
    return (
        <div className='main' role="main">
            <Navbar />
            <Shaping>
                <Banner>
                    <div className="banner banner-commun">
                        <span>Chez vous,</span><span> partout et ailleurs</span>
                    </div>
                </Banner>
                <Cards />
            </Shaping>
            <Footer />
        </div>
    )
}

export default Home