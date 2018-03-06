import Commons from 'utils/common/index';

const Ajax = {
    send: (params) => {
        return Commons.ajax(Object.assign({}, params))
    },

    getDataList(data){
        return this.send({
            url: '/api/menu.do',
            method: 'GET'
        })
    },
}

export default Ajax;