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
                    if(resp.code != 200){
                        reject(resp.message || '服务器请求失败, 请重新尝试连接！'); 
                    }else{
                        resolve(resp.data);
                    }
                },
                error: function (error) {
                    reject(error || '服务器请求失败, 请重新尝试连接！');
                }
            })
        })
    },

    _handleFormatData(params){
        for(let key in params){
            let v = params[key];
			if(v === "" || v === null || v=== undefined){
				delete params[key];
			}
        }
        return params;
    },

    getDataList(data){
        return this.send({
            url: '/api/child/list.do',
            data:data
        })
    },
}

export default Ajax;