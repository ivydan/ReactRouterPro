import _ from 'lodash';

const data = {
    success: true,
    data: [{
        name: "lilei",
        age: 23,
        class: 4
    }],
    msg: "请求失败！",
    total: 200,
    pageSize: 20,
    currentPage:1
}

const Ajax = function(ajaxData){
	//参数处理
	ajaxData.url = ajaxData['apimap'][ajaxData.api] || ajaxData.api;
    return new Promise(function(resolve, reject){
		//做一些异步操作
        setTimeout(function(){
			console.log('over!!!');
			if(data.success){
				resolve(data);
			}else{
				reject(data.msg);
			}
        }, 2000);
    })
}

export default {
	Ajax,
}