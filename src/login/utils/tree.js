import Baobab from 'baobab';

const rootState = {
    page: {
        username: "Maggie",
        password: ""
    }
}

const tree = new Baobab(rootState, {
    immutable: true
});

export default tree;