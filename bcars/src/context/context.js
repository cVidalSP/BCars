import React from 'react';
import api from '../services/axios.service';

export default class MyProvider extends React.Component{
    state = {
        items : {},
        userData: {
            nome: 'X',
        },
    }

    componentDidMount(){
        api().then(res => {
            this.setState({items: res})
        }); 
    }

    mountNewData = (data) =>{
        const newUserData = {...this.state.userData, data}
        console.log(newUserData);
        this.setState({
            userData: newUserData
        });
    }

    render(){

        const { MyContext } = this.props;
        

        return(
            <MyContext.Provider value={{
                state : this.state,
                // addValues: () => this.mountNewData(),
            }}>
                { this.props.children }
            </MyContext.Provider>
        )
    }
}

