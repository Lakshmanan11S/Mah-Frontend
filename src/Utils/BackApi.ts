import axios from "axios";

const API_URL="http://localhost:4500/api";

export const  API=axios.create({
     baseURL:API_URL
})