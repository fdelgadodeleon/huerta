import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Header = ({ }) => {
    return (
        <div>
            <FontAwesomeIcon icon={faSeedling} />
            <a>La Huerta</a>
            <NavLink
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
                to="/about" >
                Sobre nosotros
            </NavLink>

        </div>
    )
}

export default Header;