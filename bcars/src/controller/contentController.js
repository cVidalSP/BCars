import React, {Component} from 'react';
import { MyContext } from '../context/context';

import Begin from '../components/ModelR/begin/begin';
import Engine from '../components/ModelR/engine/engine';
import Paint from '../components/ModelR/paint/paint';
import Wheels from '../components/ModelR/wheels/wheels';
import Final from '../components/ModelR/finalOrder/finalOrder';
import OrderPanel from '../components/ModelR/orderStatus/orderStatus';

class MainContent extends Component {
    render(){
        return(
            <MyContext.Consumer>
                    {(context) =>(

                        <React.Fragment>

                            {context.state.navFlag === 0?
                            <Begin /> :
                            context.state.navFlag === 1?
                            <Engine /> :
                            context.state.navFlag === 2?
                            <Paint /> :
                            context.state.navFlag === 3? 
                            <Wheels /> : <Final />}
                            
                            { context.state.navFlag >=1 && context.state.navFlag <4 ? <OrderPanel />: null}
                        </React.Fragment>
                    )}
            </MyContext.Consumer>
        )
    }
}

export default MainContent;