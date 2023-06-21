import axios from 'axios'
import ApiConfigUrl from '../api'
import { APP_URL } from '../config'

export function ApiCall(uriName, payload) {
    return new Promise(async function (resolved, reject){
        try {
            console.log('ApiConfigUrl', ApiConfigUrl)
            if(ApiConfigUrl.APP_LAST_URI[uriName].method == 'POST') {
                axios.post(APP_URL.LOCAL_HOST + ApiConfigUrl.APP_LAST_URI[uriName].path, {payload : payload}).then(res => {
                    let response = res.data;
                    resolved(response)
                })
                .catch(error => {
                    reject(error)
                })
            }
            else if(ApiConfigUrl.APP_LAST_URI[uriName].method == 'GET') {
                axios.get(APP_URL.LOCAL_HOST + ApiConfigUrl.APP_LAST_URI[uriName].path)
                .then(res => {
                    let response = res.data;
                    resolved(response);
                })
                .catch(error => {
                    // handle error
                    reject(error);
                })
            }
        }
        catch(e) {
            reject(e)
        }
    }) 
}