import axios from "axios";

export const getUserIPData = async()=>{
    const res = await axios.get('https://geolocation-db.com/json/')
    return res
}