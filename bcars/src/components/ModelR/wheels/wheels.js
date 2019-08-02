import React, { useContext } from 'react';
import { MyContext } from '../../../context/context';

import { FormatUs } from '../../../utils/utils';
import Wheel1 from '../../../assets/7.png';
import Wheel2 from '../../../assets/8.png';
import Wheel3 from '../../../assets/9.png';
  
import * as styles from  './wheels.module.css';

const MainContent = () => {

    const context = useContext(MyContext);
    const selectedWheels = context.state.userData.wheels === 0 ? 
                            context.state.items.wheels.items[0]
                            
                            :context.state.items.wheels.items.filter((item)=>{
                                return item.id === context.state.userData.wheels ;
                            }) 
    return(
        <div className={ styles.mainContainer }>
            <p> Wheels </p>
            <div className={ styles.itemsContainer }>
                { context.state.items.wheels.items.map((item, key) =>{
                    return(
                        <div key={ key }  onClick={() => context.updateWheel(item.id) } 
                        className={ context.state.userData.wheels === item.id || context.state.userData.wheels === 0 && key === 0 ? styles.selectedItem : styles.item }>
                            <img className={ context.state.userData.wheels === item.id || 
                                context.state.userData.wheels === 0 && key === 0 ? styles.selectedItemImg : styles.itemImg } 
                                src={ item.id === 7 ? Wheel1 : item.id === 8 ? Wheel2 : Wheel3 } alt={ 'wheel-img' }/>
                                
                            <p>{ context.state.userData.wheels === item.id || context.state.userData.wheels === 0 && key === 0 ? context.state.userData.wheels === 0 ? selectedWheels.label : selectedWheels[0].label : null }</p>
                            <p>{ context.state.userData.wheels === item.id || context.state.userData.wheels === 0 && key === 0 ? context.state.userData.wheels === 0 ? `Included` : `+${ FormatUs.format(selectedWheels[0].price) }` : null }</p>
                        </div>
                    )
                }) }
                 

            </div>
        </div>
    )
}

export default MainContent;