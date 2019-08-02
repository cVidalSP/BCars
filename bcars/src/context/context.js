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
            finalValues: {
                engine: 0,
                color: 0,
                wheels: 0,
            }
        },
        navFlag: 0,
    }

    componentDidMount(){
            api().then(res => {
            this.setState({items: res})
        }); 
    }

    resetState = () =>{
        const newState = this.state;
        newState.navFlag = 0;
        newState.userData.engine = 0;
        newState.userData.color = 0;
        newState.userData.wheels = 0;
        newState.userData.finalValues.engine = 0;
        newState.userData.finalValues.color = 0;
        newState.userData.finalValues.wheels = 0;

        this.setState({ newState });
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

    updateColor = (id) =>{
        const newState = { ...this.state }
        newState.userData.color = id;

        this.setState({ newState });
    }

    updateWheel = (id) =>{
        const newState = { ...this.state }
        newState.userData.wheels = id;

        this.setState({ newState });
    }

    render(){

        return(
            <MyContext.Provider value={{
                state : this.state,
                updateEngine: (id) => this.updateEngine(id),
                updateColor: (id) => this.updateColor(id),
                updateWheel : (id) => this.updateWheel(id),
                resetState : this.resetState,
                sumFlag: this.sumFlagControl,
            }}>
                { this.props.children }
            </MyContext.Provider>
        )
    }
}

