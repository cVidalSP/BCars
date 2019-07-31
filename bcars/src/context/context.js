import React from 'react';
import api from '../services/axios.service';

export const MyContext = React.createContext();

export default class MyProvider extends React.Component{
    state = {
        items : {},
        userData: {},
        navFlag: 0,
    }

    componentDidMount(){
        api().then(res => {
            this.setState({items: res})
        }); 
    }

    sumFlagControl = () =>{
        console.log('entrou sum');
        const sum = this.state.navFlag + 1;

        if ( sum <= 4 ){
            this.setState({
                navFlag:  sum
            })
        }
        
    } 

    minusFlagControl = () =>{
        console.log('entrou minus');
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
                addValues: (newData) => (
                    this.state.new[`${Object.keys(newData)}`] === undefined || this.state.new[`${Object.keys(newData)}`] !== newData[0] ? this.setState({
                        userData : {...this.state.userData , newData }
                    }) : null
                ),
                sumFlag:this.sumFlagControl,
                minusFlag:this.minusFlagControl,
            }}>
                { this.props.children }
            </MyContext.Provider>
        )
    }
}

