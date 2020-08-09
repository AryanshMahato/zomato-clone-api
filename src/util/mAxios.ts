import axios from "axios";

const mAxios = axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1/",
  headers: {
    "user-key": process.env.ZOMATO_API_KEY,
  },
});

export default mAxios;
