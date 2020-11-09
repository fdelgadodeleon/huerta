import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

const Header = ({}) => {
    return (
        <div>
            <FontAwesomeIcon icon={faSeedling}/>
            <a>La Huerta</a>
        </div>
    )
}

export default Header;