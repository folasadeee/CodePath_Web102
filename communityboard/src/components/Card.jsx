import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img className="card-img" src={props.imageSrc} />
            <div className="card-contents">
            <h2>{props.name}</h2>
            <h3>{props.type}</h3>
            <p>{props.description}</p>
            <div className='divider-2' />
            <a href ={props.link} className="card-link">Learn More</a>
                </div>
            </div>
    );
};

export default Card;