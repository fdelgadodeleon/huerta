import React from 'react';
import './Home.css';
import Item from './Item';
import {verduras} from '../../consts/verduras';

const Home = ({}) => {
    return (
        <div>
            <input placeholder="Buscar"/>
            <div className="itemsContainer">
                {verduras.map(verdura => (
                    <Item title={verdura.name} img={verdura.image} description={verdura.description}/>
                ))}
            </div>
        </div>
    )
}

export default Home;