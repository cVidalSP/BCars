import React, { useContext } from 'react';

import { FormatUs } from '../../../utils/utils';
import { MyContext } from '../../../context/context';

import Car1 from '../../../assets/4.png';
import Car2 from '../../../assets/5.png';
import Car3 from '../../../assets/6.png';
import DotRed from '../../../assets/dot-red.png';
import DotBlue from '../../../assets/dot-blue.png';
import DotGrey from '../../../assets/dot-grey.png';


import * as styles from  './paint.module.css';

const MainContent = () => {

    const context = useContext(MyContext);
    const color = context.state.items.color.items.filter((item) =>{
        return item.id === context.state.userData.color ;
    })

    return(
        <div className={ styles.mainContainer }>
            <div className={ styles.imgContainer }>
                <img src={ context.state.userData.color === 4 ? Car1 :
                           context.state.userData.color === 5 ? Car2 :
                           context.state.userData.color === 6 ? Car3 : Car1 } alt={'car-color'} />



                <div className={ styles.imgDescription }>
                    <p>{ color.length > 0 ? color[0].label : context.state.items.color.items[0].label }</p>
                    <p>{ color.length === 0 ? 'Included': 
                         color[0].price > 0 ? `+${FormatUs.format(color[0].price)}` : 'Included' }</p>
                </div>
            </div>
            <div className={ styles.itemsContainer }>
                <p> Color </p>
                <p>{context.state.items.color.description}</p>
                <div className={ styles.colorPicker }>
                    { context.state.items.color.items.map((item, key) =>{

                    return(
                        
                        <div key={ key } 
                        onClick={() => context.updateColor(item.id) }
                        
                        className={ item.id === context.state.userData.color || context.state.userData.color === 0 && key === 0  ? styles.selectedColorItems : styles.colorItems }>

                            <img className={ styles.colorImg } src={ item.id === 4 ? DotRed :
                                                                     item.id === 5 ? DotBlue :
                                                                     item.id === 6 ? DotGrey : null } alt={ 'color' } />
                        </div>
                    )})}

                </div>
            </div>
        </div>
    )
}

export default MainContent;