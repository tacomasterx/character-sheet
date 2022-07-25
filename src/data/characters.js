import axios from 'axios';

const API_URL = "http://localhost:3000/api/v1/character/url";

async function characterFind(string) {


    return axios
        .get(`${API_URL}/${string !== '' ? string : 'err'}`)
        .then((response) =>
            response.data
        )
        .catch(error => {
            console.log(error);
        });
}

export default characterFind;
