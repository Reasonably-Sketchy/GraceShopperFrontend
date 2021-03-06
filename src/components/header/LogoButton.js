import React from 'react';
import { Link } from 'react-router-dom';

import headerLogo from '../../assets/sketch-shop-logo.png';
import './LogoButton.css';

const LogoButton = () => {
    return (
        <Link to="/" className="logo-button">
                <img src={headerLogo} alt="Logo"/>
        </Link>   
    );
};

export default LogoButton;