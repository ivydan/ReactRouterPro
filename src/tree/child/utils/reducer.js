"use strict";

import Baobab from 'baobab';
import _ from "lodash";

//数据
const rootState = {
    page: {
        pagination:{
            pageNumber:1,
            pageSize:20
        },
        list: []
    },
}

const tree = new Baobab(rootState, {
    immutable: true
});


//行为
const actions = {
    setDataList(tree, value){
        tree.set(["page","list"], value);
    }
}

const Reducer = {
    tree: tree,
    actions: actions
}

export default Reducer;