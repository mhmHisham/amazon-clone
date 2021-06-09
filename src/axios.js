import axios from 'axios';

const instance = axios.create({
     ///api url (cloud function)
     baseURL : 'http://localhost:5001/clone-eec7a/us-central1/api'
});

export default instance;