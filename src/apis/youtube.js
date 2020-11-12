import axios from 'axios';

const KEY = 'AIzaSyDa48LEnxRAi834QkgB67Mc4ZdiMLT8kwo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
