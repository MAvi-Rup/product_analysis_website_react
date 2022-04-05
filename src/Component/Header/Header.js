import React from 'react';
import CustomLink from '../Customlink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-navbar-class container-fluid mb-3 d-xs-none'>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/review'>Review</CustomLink>
            <CustomLink to='/dashboard'>Dashborad</CustomLink>
            <CustomLink to='/blog'>Blog</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </div>
    );
};

export default Header;