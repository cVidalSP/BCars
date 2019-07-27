import React from 'react';
import axios from 'axios';
// import api from '../services/axios.service';

export default class rvItems extends React.Component{
    state = {
        items : {},
        usarData: {},
    }

    async componentDidMount(){
     
        try{
            const response = await axios.get('https://next.json-generator.com/api/json/get/41ORKNZDU');
            const items = response.data;
            this.setState({items : items});

        }catch(err){
            console.log('error' + err);
        } 
            
    }

    render(){
        console.log(`state ` + JSON.stringify(this.state.items.data, null ,2));

        return(<p>qa</p>);
    }
}

