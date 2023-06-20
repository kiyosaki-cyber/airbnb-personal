import React from "react";

export default function Card(props){
    return(

        <div className="card">
             <img 
             src={`../src/img/${props.img}`}
          className="motorbike"/>  
            <div className="ratings"> 
                <img src="../src/img/star png.jpg" alt="star" className="star"/>
                    <span>{props.stats.ratings} </span>
                    <span>({props.stats.reviewCount})</span>
                    <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span>From ${props.price}</span>/person</p>
        </div>
      
    ) 
}