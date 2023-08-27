import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import Shaping from "./Shaping"
import Navbar from "./Navbar"
import Footer from "./Footer"


import "../Styles/Errorpage.css"

function ErrorPage() {
    return (
        <Fragment>
            <Shaping>
                <Navbar />
                <div className='error commun-error'>
                    <span>404</span>
                    <h4>Oups! La page que vous demandez n'existe pas.</h4>
                    <p><Link to="/">Retourner sur la page d’accueil</Link></p>
                </div>
            </Shaping>
            <Footer />
        </Fragment>
    )
}

export default ErrorPage