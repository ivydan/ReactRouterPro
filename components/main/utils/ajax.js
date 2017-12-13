import Commons from 'utils/common/index';

let apimap = {
    local:{
        list: 'mock/main/menu.json'
    },
    development:{
        list: 'mock/main/menu.do'
    }
};

const Ajax = {
    send: (params) => {
        return Commons.ajax(Object.assign({}, params, apimap)).catch((error) =>{
            return {
                error: error,
                data: {}
            };
        })
    },

    getDataList(data){
        return this.send({
            api: 'list',
            method: 'GET',
            data: data
        })
    },
}

export default Ajax;