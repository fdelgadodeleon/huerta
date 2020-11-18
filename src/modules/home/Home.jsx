import React from 'react';
import './Home.css';
import Item from './Item';
import { vegetables } from '../../consts/vegetables';
import { Link } from 'react-router-dom';

const Home = ({ }) => {
    return (
        <div>
            <input placeholder="Buscar" />
            <div className="itemsContainer">
                {vegetables.map(vegetable => (
                    <Link to={`/details/${vegetable.id}`}>
                        <Item title={vegetable.name} img={vegetable.image} description={vegetable.description} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home;