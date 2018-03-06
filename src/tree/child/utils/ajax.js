import xReqwest from 'xReqwest';

const Ajax = {
    send(params) {
        return new Promise((resolve, reject) => {
            let Xparams = {
                url: params.url || '',
                method: params.method || 'GET',
                data: this._handleFormatData(params.data || {})
            }
            if(params.contentType){
                Xparams.contentType = params.contentType
            }
            xReqwest({...Xparams}).then(res => {
                resolve(res);
            }, err =>{
                reject(err);
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

    sendLogin(data){
        return this.send({
            url: '/api/a/a.do',
            data:data
        })
    },
}

export default Ajax;