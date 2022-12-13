import axios from 'axios'


const api = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
    }
})


export const sendOtp = async (data) => await api.post('/send-otp',data)
export const verifyOtp = async (data) => await api.post('/verify-otp',data)
