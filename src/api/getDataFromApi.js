import axios from 'axios'

export const getApiDataByType = async (dataType) => {
    //if(dataType === 'users')
    const url = `https://jsonplaceholder.typicode.com/${dataType}`
    const res = await axios.get(url)
    console.log(res.data)
    return res.data
}