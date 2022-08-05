import axios from 'axios';

function getLevels(text, callback) {
        axios.get(`https://api.smmdb.net/courses?title=${text}`).then(resp => {
        callback(resp)
        // axios.get(`https://tgrcode.com/mm2/levels?${text}`).then(resp => {
        // callback(resp)
    });
};

export default getLevels;