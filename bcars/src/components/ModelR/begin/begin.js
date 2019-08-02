import React from 'react';

import { MyContext } from '../../../context/context';
import ModelImg from '../../../assets/car-home.png';
import ArrowImg from '../../../assets/arrow.svg';
import * as styles from  './begin.module.css';

const Begin = () => {

    return(
        <MyContext.Consumer>
            {( context ) => (
                <div className={ styles.mainContainer }>
                    <div className={ styles.titlesContainer }>
                        <p className={ styles.smallTitle }> Build your </p>
                        <p className={ styles.bigTitle }> MODEL <b> R </b></p>
                    </div>
                    <img className={ styles.carImg } src={ModelImg} alt={'car-image'} />

                    <div className={ styles.buttonContainer }>
                        <p className={ styles.nextIcon } onClick={ context.state.items !== "" ? context.sumFlag: null }> BEGIN </p>
                        <img src={ ArrowImg } alt={'arrow-svg'}/> 
                    </div>
                    <div className={ styles.footer }>
                        <div className={ styles.footerItem }>
                            <ul>
                                <li> <p><b>2.5</b><small> s </small></p> </li>
                                <li> <p>From 0 to 100</p> </li>
                            </ul>
                        </div>
                        <div className={ styles.footerItem }>
                            <ul>
                                <li> <p><b>420</b><small> mi </small></p> </li>
                                <li> <p>Miles range</p> </li>
                            </ul>
                        </div>
                        <div className={ styles.footerItem }>
                             <ul>
                                   <li> <p><b>250</b><small> mp/h </small></p> </li>
                                   <li> <p>Max speed</p> </li>
                             </ul>
                        </div>
                    </div>
                </div>
            )}
        </MyContext.Consumer>
    )
}


export default Begin;