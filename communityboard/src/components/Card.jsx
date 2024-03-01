import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img className="card-img" src={props.imageSrc} />
            <h2>{props.name}</h2>
            <h3>{props.type}</h3>
            <a href ={props.link} className="card-link">Click me!</a>
            </div>
    );
};

export default Card;