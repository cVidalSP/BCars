import React, { useContext } from 'react';

import { MyContext } from '../../../context/context';
import { FormatUs } from '../../../utils/utils';

import Car1 from '../../../assets/final-4.png';
import Car2 from '../../../assets/final-5.png';
import Car3 from '../../../assets/final-6.png';
import Rebuild from '../../../assets/rebuild.svg';

import * as styles from  './finalOrder.module.css';

const MainContent = () => {

    const context = useContext( MyContext ); 

    let engineObj;
    let colorObj;
    let wheelsObj;

    const { engine, color, wheels } = context.state.userData;

    engineObj = engine !== 0 ? context.state.items.engine.items.filter((item)=>{
        return item.id === engine;
    }): context.state.items.engine.items.filter((item)=>{
        return item.id === 1;
    })

    colorObj = color !== 0 ? context.state.items.color.items.filter((item) =>{
        return item.id === color 
    }): context.state.items.color.items.filter((item) =>{
        return item.id === 4;
    })

    wheelsObj = wheels !== 0 ? context.state.items.wheels.items.filter((item) =>{
        return item.id === wheels; 
    }): context.state.items.wheels.items.filter((item) =>{
        return item.id === 7; 
    })



    return(
        <div className={ styles.mainContainer }>
            <div className={ styles.imgContainer }>
                <img className={ styles.carImg } className={ styles.carImg }src={ context.state.userData.color === 4 ? Car1 :
                                                      context.state.userData.color === 5 ? Car2 :
                                                      context.state.userData.color === 6 ? Car3 : Car1 } alt={ 'final-car' } />
            </div>

            <div className={ styles.orderContainer }>
                
                <div className={ styles.orderHeader }>
                    <p>Your</p>
                    <p>Model</p>
                    <p>R</p>

                </div>
                <div className={ styles.items }>
                    <p>Starting Price</p>
                    <p>{FormatUs.format(context.state.items.price)}</p>
                </div>

                <hr className={ styles.pipe }/>

                <div className={ styles.items }>
                    <p>{ `${ engineObj[0].kwh } ${ engineObj[0].type } - ${ engineObj[0].kwh } KWh - ${ engineObj[0].range } miles range` }</p>
                    <p>{ engineObj[0].price > 0 ? `+${FormatUs.format(engineObj[0].price) }` : 'Included' }</p>
                </div>

                <div className={ styles.items }>
                    <p>{ colorObj[0].label }</p>
                    <p>{ colorObj[0].price > 0 ? `+${ FormatUs.format(colorObj[0].price) }` : 'Included' }</p>
                </div>

                <div className={ styles.items }>
                    <p>{ wheelsObj[0].label }</p>
                    <p>{ wheelsObj[0].price > 0 ?`+${ FormatUs.format(wheelsObj[0].price) }` : 'Included'}</p>
                </div>

                <hr className={ styles.pipe }/>

                <div className={ styles.final }>
                    <p>Final Price</p>
                    <p>{ FormatUs.format(context.state.items.price + engineObj[0].price + colorObj[0].price + wheelsObj[0].price ) }</p>
                </div>

                <div className={ styles.rebuildButton }>
                        <p onClick={ context.resetState }>REBUILD</p>
                        <img onClick={ context.resetState } src={ Rebuild } alt={ 'rebuild-svg' }/>
                </div>

            </div>
        </div>
    )
}

export default MainContent;