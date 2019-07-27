import * as axios from 'axios';

const getItems = async() =>{
        try{
            const response = await axios.get('https://next.json-generator.com/api/json/get/41ORKNZDU');
            const obj = response.data.data;
            return(obj);
        }catch(err){
            console.warn(err);
        }
}

export default getItems;