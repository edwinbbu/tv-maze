import axios from 'axios';

const getShow = async (showname) => {
    return await axios.get(`http://api.tvmaze.com/search/shows?q=${showname}`);
}

export default getShow;