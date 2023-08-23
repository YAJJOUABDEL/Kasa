import React, { useState } from 'react'
import chevronUp from "../assets/Chevron-Up.png"
import chevronDown from "../assets/Chevron-Down.png"
import "../Styles/Collapse.css"




function Collapse({title, content}) {

    const [contentVisible, setContentVisible] = useState(false)

    const affContent = () => { 
        setContentVisible(!contentVisible)
    }

    const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse"
    const collapseChevron = (contentVisible ? chevronUp : chevronDown)

    return (
        <div className='collapse'>

            <div className='collapse__header' onClick={affContent}>
                <span>{title}</span>
                <div className="chevronValue">
                    <img src={collapseChevron} alt=""/>
                </div>
            </div>

            <div className={collapseContent}>
                <ul>{content}</ul>
            </div>
        </div>
    )
}

export default Collapse