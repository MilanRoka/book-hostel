import axios from 'axios';



export const getPackage = async() =>{
    const config = {
        headers: {
            'Content-type': 'application/json',
        }
    }
    const {data} = await axios.get('http://localhost:3000/package/', config)
    return data
}

export const getPackageById = async(id) =>{
    const config = {
        headers: {
            'Content-type': 'application/json',
        }
    }
    const {data} = await axios.get(`http://localhost:3000/package/${id}`, config)
    return data
}