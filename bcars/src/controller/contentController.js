import React, {Component} from 'react';
import { MyContext } from '../context/context';

import Begin from '../components/ModelR/begin/begin';
import Engine from '../components/ModelR/engine/engine';
import Paint from '../components/ModelR/paint/paint';
import Wheels from '../components/ModelR/wheels/wheels';
import Final from '../components/ModelR/finalOrder/finalOrder';

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

                            <button onClick={context.sumFlag}> prox </button>
                            <button onClick={context.minusFlag}> ant </button>
                        </React.Fragment>
                    )}
            </MyContext.Consumer>
        )
    }
}

export default MainContent;