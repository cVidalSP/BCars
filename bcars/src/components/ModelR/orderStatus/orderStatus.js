import React, { useContext } from 'react';
import { FormatUs } from '../../../utils/utils';

import { MyContext } from '../../../context/context';

import ArrowImg from '../../../assets/arrow.svg';
import DotRed from '../../../assets/dot-red.png';
import DotBlue from '../../../assets/dot-blue.png';
import DotGrey from '../../../assets/dot-grey.png';
import Wheel1 from '../../../assets/7.png';
import Wheel2 from '../../../assets/8.png';
import Wheel3 from '../../../assets/9.png';

import * as styles from  './orderStatus.module.css';

const OrderPanel = () =>{

    const context = useContext(MyContext);


    let plusEngine;
    let plusColor;
    let plusWheels;
    let priceEngine;
    let priceColor;
    let priceWheels;

    const { engine, color, wheels } = context.state.userData;

    priceEngine = context.state.items.engine.items.map((item)=>{
        return(item.id === engine ? item.price : 0 );
    })

    priceColor = context.state.items.color.items.map((item) =>{
        return(item.id === color ? item.price : 0);
    })

    priceWheels = context.state.items.wheels.items.map((item) =>{
        return(item.id === wheels ? item.price : 0);
    })

    plusEngine = priceEngine.reduce((prevValue, newItem) =>{
        return prevValue + newItem;
    });

    plusColor = priceColor.reduce((prevValue, newItem) =>{
        return prevValue + newItem;
    });

    plusWheels = priceWheels.reduce((prevValue, newItem) =>{
        return prevValue + newItem;
    });

    const engineType = engine !== 0 ? context.state.items.engine.items.map((item) =>{
        return(item.id === engine ? `${item.type}` : null );
    }) : context.state.items.engine.items[0].type

    const engineKwh = engine !== 0 ? context.state.items.engine.items.map((item) =>{
        return(item.id === engine ? `${item.kwh}` : null )
    }) : context.state.items.engine.items[0].kwh

    return(
        <div className={ styles.statusContainer }>
            <div className={ styles.statusItem }>
               <p> Total </p>
               <p> { FormatUs.format(plusEngine + plusColor + plusWheels + context.state.items.price) } </p>
            </div>
            <div className={ styles.statusItem }>
                <p> Model R </p>
            </div>
            <div className={ styles.statusItem }>
                { context.state.navFlag >= 1 ?

                    <p className={ styles.engine } onClick={()=> context.setNavFlag(1) } >{engineKwh}<b>{engineType}</b></p>
                    
                    : null }
            </div>
            <div className={ styles.statusItem }>
                { context.state.navFlag >= 2 ? 

                    <img onClick={() => context.setNavFlag(2) } className={ styles.colorDot } src={ color === 4 ? DotRed: color === 5 ? DotBlue : color === 6 ? DotGrey: DotRed } alt={ 'car-color' }/>
                
                : null }
            </div>
            <div className={ styles.statusItem }>
                { context.state.navFlag >= 3 ? 
                
                    <img onClick={() => context.setNavFlag(3)} className={ styles.wheelImg } src={ wheels === 7 ? Wheel1 : wheels === 8 ? Wheel2 : wheels === 9 ? Wheel3 : Wheel1 } alt={ 'wheel-img' } />

                : null }
            </div> 
            <div className={ styles.buttonContainer }>
                    <p onClick={ context.sumFlag } className={ styles.nextIcon }> next </p>
                    <img onClick={ context.sumFlag } src={ ArrowImg } alt={'arrow-svg'}/> 
            </div>
        </div>
    )
}


export default OrderPanel;