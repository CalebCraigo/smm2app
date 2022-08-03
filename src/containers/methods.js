import axios from 'axios';

function getLevels(text, callback) {
        axios.get(`https://api.smmdb.net/courses2?title=${text}`).then(resp => {
        callback(resp)
    });
};

export default getLevels;