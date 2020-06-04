import axios from "axios"


export default axios.create({
  baseURL: "http://developers.zomato.com/api/v2.1",
  headers: {
    "user-key": "5ec79f16bb0e7b0165c5775f5cda9082"
  }
})