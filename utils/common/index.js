import reqwest from 'reqwest';
import _ from 'lodash';

const assert = function(condition, error){
    if(condition !== true){
        throw new Error(error);
    }
}

const Commons = {
    ajax(params) {
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

    initComponent(component, options){
        let actions = options.actions;
        assert(_.isObjectLike(actions), "export Actions to be an Object, but get " + typeof actions);

        //assign dispatch() method to component
        component.dispatch = function (name) {
            let actionHandler = actions[name];
            let args = Array.prototype.slice.call(arguments, 0);
            assert(actionHandler != null, "Action Not Found: " + name);
            args[0] = actionHandler;
            this.props.dispatch.apply(this, args);
        }.bind(component);

        //assgin getData() method to component
        assert(component.getData === undefined, //check method existence
            "component's 'getData' property already defined, fail to assign getData() method to component");
        component.getData = function(path){
            return _.at(this.props.data, path)[0];
        }.bind(component);
    }

}

export default Commons;