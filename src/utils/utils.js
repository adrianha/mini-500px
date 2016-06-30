import axios from 'axios';
import { API_URL } from './constants';

export function reqq(payload) {
  const instance = axios.create({
    baseURL: API_URL,
    timeout: 20000,
  });

  return instance
    .request(payload);
}
