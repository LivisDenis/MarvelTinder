import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import md5 from 'md5';

const ts = Date.now();
const apiPublicKey = '8b744fd88ebd8fc1d4479d6c2b7dbaca';
const apiPrivateKey = 'f3909cf07ba871b11b1be2195b308ef2d30420b6';
const hash = md5(ts + apiPrivateKey + apiPublicKey);

// http://gateway.marvel.com/v1/public/comics?ts=1674621022585&apikey=8b744fd88ebd8fc1d4479d6c2b7dbaca&hash=b8ed7614d92b04d2e35986cf69a651d2
export const api = axios.create({
  validateStatus: (status) => status >= 200 && status < 500,
  baseURL: `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apiPublicKey}&hash=${hash}`
});
