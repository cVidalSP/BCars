import React from 'react';
import api from '../services/axios.service';

export const MyContext = React.createContext();

export default class MyProvider extends React.Component{
    state = {
        items : [],
        userData: {
            engine: 0,
            color: 0,
            wheels: 0,
        },
        navFlag: 0,
    }

    componentDidMount(){
            api().then(res => {
            this.setState({items: res})
        }); 
    }

    sumFlagControl = () =>{
        const sum = this.state.navFlag + 1;

        if ( sum <= 4 ){
            this.setState({
                navFlag:  sum
            })
        }
        
    } 

    updateEngine = (id) =>{
        const newState = {...this.state}
        newState.userData.engine = id;

        this.setState({ newState });
    }

    minusFlagControl = () =>{
        const minus = this.state.navFlag - 1;

        if ( minus >= 0 ){
            this.setState({
                navFlag:  minus
            })
        }
    }

    render(){

        return(
            <MyContext.Provider value={{
                state : this.state,
                updateEngine: (id) => this.updateEngine(id),
                sumFlag:this.sumFlagControl,
                minusFlag:this.minusFlagControl,
            }}>
                { this.props.children }
            </MyContext.Provider>
        )
    }
}

