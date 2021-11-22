import axios from "axios";

const defaultOptions = {
    baseURL: 'http://api.incirogluikinciel.ageenta.com/api/',
    headers: {
        'Content-Type': 'multipart/form-data',
    }
}

let instance = axios.create(defaultOptions);

export default instance;