
import React, { useState } from 'react'
import arrowLeft from "../assets/arrowLeft.png"
import arrowRight from "../assets/arrowRight.png"
import "../Styles/Carousel.css"


function Carousel({pictures}) {

    const [index, setIndex] = useState(0)
    const totalPictures = pictures.length-1

    if (index < 0) setIndex(totalPictures)
    if (index > totalPictures) setIndex(0)  
    
    const goToPrevious = () => {
        const isFirstSlide = index === 0;
        const newIndex = isFirstSlide ? totalPictures : index - 1;
        setIndex(newIndex);
      };
      
      const goToNext = () => {
        const isLastSlide = index === totalPictures;
        const newIndex = isLastSlide ? 0 : index + 1;
        setIndex(newIndex);
      };
    
    return(
        <div className='carousel'>

            {}
            <div className='div-image'>  
                <img src={pictures[index]} className="classImage" key={"car-"+index} alt={"photo "+index} />
            </div>

            {}
            {totalPictures > 0 && ( 
                <div onClick ={goToPrevious} className= "classChevron-left"> {}
                     <img src= {arrowLeft} alt={"arrow-Left"}/> 
                </div>
                
            )}
            {}
            {totalPictures > 0 && ( 
                <div onClick={goToNext} className= "classChevron-right"> {}
                    <img src= {arrowRight} alt={"arrow-right"}/>
                </div>
                
            )}
            {totalPictures > 0 && (
                
                <div className='div-compteur'> 
                    <p className='compteurImages'>
                        {index+1}/{totalPictures+1}
                    </p>
                </div>
            )}
        </div>
    )
}


export default Carousel