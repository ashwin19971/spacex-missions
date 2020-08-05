import axios from 'axios';

import { apiBaseUrl } from '../../../models/config.js';

export function getMissionsList(urlParams) {
    return axios.get(`${apiBaseUrl}?${urlParams}`)
        .then((res) => {
            if(res["status"] == 200){
                return res["data"];
            }
            console.log("Something invalid");
            return [];
        })
        .catch((err) => {
            console.log(err, '=====> ERROR <======');
        });
}
