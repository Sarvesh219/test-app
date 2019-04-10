import Logo from './../../assets/graphics/logo.png';
import React from 'react';

import './styles.scss';

const Header = (props) => {
    return (
        <header>
            <div className="wrapper">
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div>
            </div>
        </header>
    );
};

export default Header;