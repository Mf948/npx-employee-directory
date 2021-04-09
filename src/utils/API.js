
import axios from "axios";
 
const number = 5
const BASEURL = `https://randomuser.me/api/?results=`;

export default {
    directory: function(number){
        return axios.get(BASEURL +  number)
    }
}