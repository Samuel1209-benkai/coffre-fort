import axios from "axios";
const authFetch = axios.create({
    baseURL:'https://localhost:3000',
});

export default authFetch