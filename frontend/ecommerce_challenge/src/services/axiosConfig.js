import axios from 'axios'

const IP = `192.168.1.11`

export const http = axios.create({
    baseURL: `http://${IP}:5000/`
})