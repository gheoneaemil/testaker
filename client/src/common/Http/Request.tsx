import axios from 'axios';

export default function httpGet(url: string): Promise<any>{

    return new Promise((resolve, reject) => {

        axios({
            method: "GET",
            url: url,
            data: {},
            headers: { "Access-Control-Allow-Origin" : "*" , "Content-Type" : "application/json" }
        })
        .then(function(response){
            resolve(response.data);
        })
        .catch(function(err){
            reject(err)
        });

    });

}