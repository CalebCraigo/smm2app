import axios from 'axios';
import { levels } from '../api/mockData';

const fetchLevels = () => {
  return levels;
};

// async function getLevels(text){
//     console.log("text ", text);
//     const res = await axios.get(`https://api.smmdb.net/courses2?title=${text}`)
//     console.log(res.status)
//     return levels
// }

function getLevels(text, callback) {
        axios.get(`https://api.smmdb.net/courses2?title=${text}`).then(resp => {
        callback(resp)
    });
};

export default getLevels;