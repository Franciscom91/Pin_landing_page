import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://backlanding.herokuapp.com/'
})

const sendEmail = async (data) => {
    const response = await instance({
        method: 'post',
        url: 'contact',
        data: data
    })
    return response 
}

export {
    sendEmail
}