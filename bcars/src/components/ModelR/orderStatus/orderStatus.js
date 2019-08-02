import React, { useContext } from 'react';
import { FormatUs } from '../../../utils/utils';

import { MyContext } from '../../../context/context';

import ArrowImg from '../../../assets/arrow.svg';

import * as styles from  './orderStatus.module.css';
import { type } from 'os';

const OrderPanel = () =>{

    const context = useContext(MyContext);

    
    let plusItems;
    let priceList;

    const { engine, color, wheels } = context.state.userData;

    priceList = context.state.items.engine.items.map((item)=>{
        return(item.id === engine ? item.price : 0 );
    })

    plusItems = priceList.reduce((prevValue, newItem) =>{
        return prevValue + newItem;
    });

    const engineType = context.state.items.engine.items.map((item) =>{
        return(item.id === engine ? `${item.type}` : null)
    })
    const engineKwh = context.state.items.engine.items.map((item) =>{
        return(item.id === engine ? `${item.kwh}` : null)
    })

    return(
        <div className={ styles.statusContainer }>

            <div className={ styles.statusItem }>
               <p> Total </p>
               <p> { FormatUs.format(plusItems + context.state.items.price) } </p>
            </div>
            <div className={ styles.statusItem }>
                <p> Model R </p>
            </div>
            <div className={ styles.statusItem }>
                { context.state.navFlag >= 1 ?

                    <p>{engineKwh}<b>{engineType}</b></p>
                    
                    : null }
            </div>
            <div className={ styles.statusItem }>
                { context.state.navFlag >= 2 ? <p> color </p>: null }
            </div>
            <div className={ styles.statusItem }>
                { context.state.navFlag >= 3 ? <p> wheels </p>: null }
            </div> 
            <div className={ styles.buttonContainer }>
                <p className={ styles.nextIcon } onClick={context.sumFlag}> next </p>
                <img src={ ArrowImg } alt={'arrow-svg'}/> 
            </div>
        </div>
    )
}


export default OrderPanel;