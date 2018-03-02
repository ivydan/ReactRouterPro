import reqwest from 'reqwest';

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
                    resolve(resp);
                },
                error: function (error) {
                    reject(error || '服务器请求失败');
                }
            })
        })
    },

    onLogin(data){
        return this.send({
            url: '/api/login.do',
            data:data
        })
    },
}

export default Ajax;