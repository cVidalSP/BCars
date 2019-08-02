import React, { useContext } from 'react';
import { FormatUs } from '../../../utils/utils';

import { MyContext } from '../../../context/context';

import car1 from '../../../assets/1.png';
import car2 from '../../../assets/2.png';
import car3 from '../../../assets/3.png';

import * as styles from  './engine.module.css';

const Engine = () =>{

    const context = useContext(MyContext);

    return(
        <div className={ styles.mainContainer }>

            
            <img src={context.state.userData.engine <= 1 ? car1 :
                context.state.userData.engine === 2 ? car2 :
                context.state.userData.engine === 3 ? car3 : car1 } alt={ 'car-engines' }/>

            <div className={ styles.menuItems }>
                <h1>Engine</h1>
                {context.state.items.engine.items.map((item,key) => 
                    (
                    <div className={ styles.itemsContainer }>   
                        <div 
                            key={key}
                            className={ context.state.userData.engine === item.id ? styles.selectedItem : styles.items } 
                            data-context={ context } 
                            onClick={() => context.updateEngine(item.id) }>

                                <p>{`${ item.kwh }`} <b>{`${item.type}`}</b></p>
                                <p>{`${ item.kwh } kWh`}</p>
                                <p>{`${ item.range } miles range`} </p>

                            <div className={ context.state.userData.engine === item.id ? styles.selectedRadio : styles.radio }></div>
                        
                        </div>
                        <p className={ styles.price }>{context.state.userData.engine === item.id && context.state.userData.engine !== 1 ? `+${FormatUs.format(item.price)}`: null}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Engine;