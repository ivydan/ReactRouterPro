import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import route from 'utils/route';
import zhCN from 'utils/common/zhCN';

import './app.less';

if (process.env.IS_MOCK) {
    console.log(process.env)
    require("../mock/index");
}

// import 'antd/dist/antd.css';
// let app = document.createElement('div');
// document.body.appendChild(app);
// ReactDOM.render(<div>
//     {route}
// </div>, app);

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <div className="sd-container">
            {route}
        </div>
    </LocaleProvider>
    , document.getElementById("container"));