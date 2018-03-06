import reqwest from 'reqwest';
import { JSEncrypt } from 'jsencrypt';

const Ajax = {
    send(params) {
        return new Promise(function (resolve, reject) {
            reqwest({
                url: params.url || '',
                method: params.method || 'GET',
                data: params.data,
                type: params.type || 'json',
                contentType: params.contentType || 'application/x-www-form-urlencoded',
                crossOrigin: true,
                withCredentials: true,
                success: function (resp) {
                    if(resp.code != 200){
                        reject(resp.message); 
                    }else{
                        resolve(resp.data);
                    }
                },
                error: function (error) {
                    reject(error || '服务器请求失败');
                }
            })
        })
    },

    onLogin(data){
        let encrypt = new JSEncrypt();
        data.password = encrypt.encrypt(data.password);
        return this.send({
            url: '/api/user/login.do',
            data:data,
            method: "POST"
        })
    },
}

export default Ajax;