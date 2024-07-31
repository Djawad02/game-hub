import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'4baeb230803a419c9e38cbfc49ecebbc'
    }
})