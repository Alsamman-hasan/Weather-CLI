import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.services"

const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  console.log(token);
  if(!token) {
    throw new Error(' не задан ключ API, задайте его через команду -t [API_KEY]')
  }

  const {data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'ru',
      units: 'metric'
    }
  })

  console.log(data);
} 

export { getWeather }; 