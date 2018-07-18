import axios from 'axios';

const instance = axios.create({
    baseURL:''
}) 

instance.defaults.headers.common[''] = '';

export default instance;

/// import axios from here to use it
