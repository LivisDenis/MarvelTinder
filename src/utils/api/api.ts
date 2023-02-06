import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import md5 from 'md5';

const ts = Date.now();
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY!;
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

// http://gateway.marvel.com/v1/public/comics?ts=1674621022585&apikey=8b744fd88ebd8fc1d4479d6c2b7dbaca&hash=b8ed7614d92b04d2e35986cf69a651d2
export const api = axios.create({
  validateStatus: (status) => status >= 200 && status < 500,
  baseURL: `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
});
