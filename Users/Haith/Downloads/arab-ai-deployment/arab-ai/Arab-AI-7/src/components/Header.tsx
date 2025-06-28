import React from 'react';
import Logo from '../assets/logo.png'; // This path will be updated next

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Arab AI Logo" />
            <h1>Arab AI</h1> {/* Changed from NextChat to Arab AI */}
        </header>
    );
};

export default Header;