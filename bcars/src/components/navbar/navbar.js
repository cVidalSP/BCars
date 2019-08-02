import React from 'react';
import rvImage from '../../assets/RV-logo.svg';
import * as styles from './navbar.module.css';

const NavBar = () =>{
    return(
        <div className={ styles.navContainer }>
            
            <img className={ styles.navImg }  src={rvImage} alt={'Car'} />
            
            <ul className={ styles.menuItems } >
                <li> <p> Model R       </p> </li>
                <li> <p> Model IQ      </p> </li>
                <li> <p> Model Mobi    </p> </li>
                <li> <p> Model Charlie </p> </li>
                <li> <p> Model Italy   </p> </li>
            </ul>
        
        </div>
    )
}

export default NavBar;