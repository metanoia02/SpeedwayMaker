import axios from 'axios'

export default axios.create({
    baseURL: 'https://orange.zapto.org:3900/api',
    headers: {},
})
