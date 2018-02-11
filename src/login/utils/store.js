import Reflux from 'reflux';
import Actions from './action';

let stateTree = {
    name: ""
}

export default class DataStore extends Reflect.Store{
    constructor(){
        super();
        this.state = stateTree;
        this.listenables = Actions;
    }

    onHandleChangeName(i){
        this.setState({
            name: i
        })
    }
}