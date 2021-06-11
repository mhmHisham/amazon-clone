import axios from 'axios';

const instance = axios.create({
     ///api url (cloud function)
     baseURL : 'https://us-central1-clone-eec7a.cloudfunctions.net/api'
});

export default instance;

//http://localhost:5001/clone-eec7a/us-central1/api