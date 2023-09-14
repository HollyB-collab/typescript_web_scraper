import axios from "axios";
console.log('Project setup correctly');

const url = "https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1";
const AxiosInstance = axios.create();

//sending async HTTP get request to url
AxiosInstance.get(url)
.then(
  response => {
    const html = response.data;
    console.log(html);
  }
)
.catch(console.error);