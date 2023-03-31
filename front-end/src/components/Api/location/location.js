import axios from 'axios';

const access_token = 'SQeIqDM-6zbSS-YVDFc1FXAO'


export const getDistrict = async() =>{
    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${access_token}`  
          }
          
          
}
    const {data} = await axios.get('https://nepallocation.com.np/api/v1/district/list', config)
    return data
}

