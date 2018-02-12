"use strict";

import _ from "lodash";

const actions = {
    changePassWord(tree, value){
        tree.set(["page","password"], value);
    }
}

export default actions;