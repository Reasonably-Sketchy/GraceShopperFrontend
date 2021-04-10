import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './NavList.css';

const NavList = ({ 
    isMenuOpen, 
    toggleMenu, 
    activeLinkIs,
    // setToken, 
    // setUserData, 
    // userData 
}) => {
    
    return (
        <nav className="nav" id={isMenuOpen ? 'nav-active' : ''}>
    
            <ul className="nav-list" id={isMenuOpen ? 'nav-list-active' : ''}>

                <li>
                    <Link 
                        to="/" 
                        className="nav-link"
                        id={activeLinkIs === "Home" ? 'active-nav-link' : ''}
                        onClick={() => {
                            toggleMenu();
                        }}>Home</Link>
                </li>

                <li>
                    <Link 
                        to="/products" 
                        className="nav-link"
                        id={activeLinkIs === "Products" ? 'active-nav-link' : ''}
                        onClick={() => {
                                toggleMenu();
                            }}>Products</Link>
                </li>

                

                <li>
                    <Link 
                        to="/account" 
                        className="nav-link"
                        id={activeLinkIs === "Account" ? 'active-nav-link' : ''}
                        onClick={() => {
                                toggleMenu();
                            }}>Account</Link>
                </li>

                <li>
                    <Link 
                        to="/admin" 
                        className="nav-link"
                        id={activeLinkIs === "Admin" ? 'active-nav-link' : ''}
                        onClick={() => {
                                toggleMenu();
                            }}>Admin</Link>
                </li>

                <li>
                    <Link 
                        to="/welcome" 
                        className="nav-link"
                        id={activeLinkIs === "Welcome" ? 'active-nav-link' : ''}
                        onClick={() => {
                                toggleMenu();
                            }}>Login/Register</Link>
                </li>

                <li>
                    <Link 
                        to="/cart" 
                        className="nav-link"
                        id={activeLinkIs === "Cart" ? 'active-nav-link' : ''}
                        onClick={() => {
                            toggleMenu();
                        }}>Cart</Link>
                </li>
                
            </ul>
        </nav>
    );
};

export default NavList;