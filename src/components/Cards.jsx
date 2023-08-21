import React from 'react'
import { Link } from "react-router-dom"
import records from "../data-api/logements.json"
import "../Styles/Cards.css"

// composant qui permet de récupérer la liste des logements et de les afficher sous forme de card

const Cards = () => {
    return (
        <section className="logements">

            {/* liste la base de données */}
            {records.map((record) => {
                const { id, cover, title } = record;

                // affiche la fiche logement sur la page d'accueil
                return (
                    <article className="fiche-logement" key={id}>
                        <Link to={{ pathname: "/Logement", search: "?_id="+id }}>
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </article>
                )
            })}
        </section>
    )
}

export default Cards