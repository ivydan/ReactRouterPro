"use strict";

import Baobab from 'baobab';
import _ from "lodash";

//Store
const rootState = {
    page: {
        pagination:{
            pageNumber:1,
            pageSize:30
        },
        list: [],
        total: 0,
        loading: true
    },
}

const tree = new Baobab(rootState, {
    immutable: true
});

//Actions
const actions = {
    setDataList(tree, data){
        tree.set(["page", "list"], data.list);
        tree.set(["page", "total"], data.total);
    },
    setPaginationValue(tree, field){
        _.forIn(field, (v, key) => {
            tree.set(["page", "pagination", key], v.value || v);
        });
    },
    setLoading(tree, value){
        tree.set(["page", "loading"], value);
    }
}

const Reducer = {
    tree: tree,
    actions: actions
}

export default Reducer;