import React from 'react';

const Item = ({title, description, img}) => {

    const getSrc = () => require(`../../assets/${img}`)

    return (
        <div className="card">
            <img alt={title} src={getSrc()}/>
            <div className="info">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Item;