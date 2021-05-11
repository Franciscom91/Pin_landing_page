import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://backlanding.herokuapp.com/api/'
})

const sendEmail = async (data) => {
    const response = await instance({
        method: 'post',
        url: 'email',
        data: data
    })
    return response 
}

export {
    sendEmail
}