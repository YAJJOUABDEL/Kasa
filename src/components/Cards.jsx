import React from 'react'
import { Link } from "react-router-dom"
import records from "../data-api/logements.json"
import "../Styles/Cards.css"

const Cards = () => {
    return (
        <section className="logements">

       
            {records.map((record) => {
                const { id, cover, title } = record;
                return (
                    <article className="fiche-logement" key={id}>
                        <Link className='logementLink' to={{ pathname: "/Logement", search: "?_id="+id }}>
                            <img src={cover} alt={title} />
                            <h3> {title} </h3>
                        </Link>
                    </article>
                )
            })}
        </section>
    )
}

export default Cards