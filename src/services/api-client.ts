import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd472272757d14fb6a6e3d33a066b6da2' 
    }
})