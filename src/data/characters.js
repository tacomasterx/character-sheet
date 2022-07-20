import {useEffect} from 'react'
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

const Character = (props) => {

    useEffect(() => {
        let mounted = true;
        characterFind(props.url).then((items) => {
            if (mounted) {
                props.setCharacter(items.length !== 0 ? items[0] : {});
            }
        });
        return () => (mounted = false);
    }, []);

    return (
        <></>
    );
}

export default characterFind;
