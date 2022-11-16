import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVER_URI;

export const client = axios.create({
  baseURL: baseURL,
});
