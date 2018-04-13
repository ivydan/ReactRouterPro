import React, { Component } from 'react';
import Page from "../../src/tree/child/view/page";
import Ajax from "../../src/tree/child/utils/ajax";
import { shallow, render, mount } from "enzyme";
import reqwest from 'reqwest';
import Baobab from 'baobab';
import { root, branch } from 'baobab-react/higher-order';

//Store
const rootState = {
    page: {
        pagination: {
            pageNumber: 1,
            pageSize: 30
        },
        list: [],
        total: 0,
        loading: true
    },
}

const tree = new Baobab(rootState, {
    immutable: true
});

class BasicRoot extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

//模拟Props，渲染组件创建Wrapper
const setup = () => {
    //模拟props
    const props = {};

    const Root = root(tree, BasicRoot);

    const BranchedChild = branch({
        data: ['page']
    }, Page);
    //mount 将react组件加载为真是的DOM，适用于DOM API 存在交互组件，可以测试组件完整的生命周期
    const wrapper = mount(<Root tree={tree}><Page /></Root>);

    return {
        props,
        wrapper
    }
}

//测试组件是否正常渲染
describe('AddPageView', () => {
    const { wrapper, props } = setup();
    //通过查找存在child-bundle-container， 测试组件正常渲染
    it("AddPageView Component should be render", () => {
        //find是Enzyme shallow Rendering 提供的语法，用于查找节点
        //详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
        expect(wrapper.find(".child-bundle-container").exists());
        expect(wrapper.find(".search-container").exists());
        expect(wrapper.find("Table").exists());
    });
    //测试事件
    // it("addPageView Click should be called", () => {
    //     wrapper.find("button[type='submit']").simulate('click');
    //     expect(jest.fn()).toBeCalled();
    // });
    //由于 Reducer 是纯函数，因此对 Reducer 的测试非常简单，Redux 官方文档也提供了测试的例子
    // it('should create an action to add a todo', () => {
    //     const text = 'Finish docs'
    //     const expectedAction = {
    //         type: types.ADD_TODO,
    //         text
    //     }
    //     expect(actions.addTodo(text)).toEqual(expectedAction)
    // });
});

// test('Ajax Data', async () => {
//     expect.assertions(1);
//     const data = await Ajax.getDataList();
//     expect(data).toEqual(200);
// });
