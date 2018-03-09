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

    _handleFormatData(params){
        for(let key in params){
			if(!params[key]){
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