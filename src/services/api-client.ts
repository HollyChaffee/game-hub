import axios from "axios";
{/*create axios instance with custom config*/}
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {  /* with this config, the key will be included in the query string of every http request we send to backend*/ 
      key: '31cfafd31f9945519c82b453dac6b9fa'
    },
});