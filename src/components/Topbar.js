import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Topbar.css';

function Topbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false);
    return (
        <>
            <nav className = 'topbar'>
                <div className = 'topbar_container'>
                    <div className = 'menu-icon' onClick = {handleClick}>
                        <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to = '/Expedition' className = 'nav-links' onClick = {closeMobileMenu}>
                                Expedition
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/Ritual' className = 'nav-links' onClick = {closeMobileMenu}>
                                Ritual
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/Heist' className = 'nav-links' onClick = {closeMobileMenu}>
                                Heist
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/Harvest' className = 'nav-links' onClick = {closeMobileMenu}>
                                Harvest
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/Delirium' className = 'nav-links' onClick = {closeMobileMenu}>
                                Delirium
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/Metamorph' className = 'nav-links' onClick = {closeMobileMenu}>
                                Metamorph
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/Blight' className = 'nav-links' onClick = {closeMobileMenu}>
                                Blight
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/Legion' className = 'nav-links' onClick = {closeMobileMenu}>
                                Legion
                            </Link>
                        </li>
                    </ul>

                    <Link to = '/' className = "topbar-logo">
                        Path of Exile Leagues 
                    </Link>
                    
                </div>
            </nav>
        </>
    )
}

export default Topbar