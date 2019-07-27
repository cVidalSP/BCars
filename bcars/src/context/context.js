import React from 'react';
import api from '../services/axios.service';

export default class rvItems extends React.Component{
    state = {
        items : {},
        usarData: {},
    }

    componentDidMount(){
        api().then(res => {
            this.setState({items: res})
        }); 
    }

    render(){
        console.log(this.state.items)
        return(<p>teste</p>)
    }
}

