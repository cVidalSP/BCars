import React from 'react';
import rvImage from '../../assets/RV-logo.svg';
import * as styles from './navbar.module.css';

const NavBar = () =>{
    return(
        <div className={ styles.navContainer }>
            
            <img className={ styles.navImg }  src={rvImage} alt={'Car'} />
            
            <ul className={ styles.menuItems } >
                <li> <a href='#'> Model R       </a> </li>
                <li> <a href='#'> Model IQ      </a> </li>
                <li> <a href='#'> Model Mobi    </a> </li>
                <li> <a href='#'> Model Charlie </a> </li>
                <li> <a href='#'> Model Italy   </a ></li>
            </ul>
        
        </div>
    )
}

export default NavBar;