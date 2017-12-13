import reqwest from 'reqwest';

const Commons = {
    ajax(params) {
        let url = process.env.IS_MOCK ? params['local'][params.api]: params['development'][params.api]

        return new Promise(function (resolve, reject) {
            reqwest({
                url: url || '',
                method: params.method || 'GET',
                data: params.data,
                type: 'json',
                success: function (resp) {
                    resolve(resp);
                },
                error: function (error) {
                    reject(error || '服务器请求失败');
                }
            })
        })
    }
}

export default Commons;