import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/todos',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
