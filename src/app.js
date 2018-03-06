import React from 'react';
import ReactDOM from 'react-dom';
import route from 'utils/route';
import './app.less';

import 'antd/dist/antd.css';

console.log(process.env)

if(process.env.IS_MOCK){
    require("../mock/index");
}

// let app = document.createElement('div');
// document.body.appendChild(app);
// ReactDOM.render(<div>
//     {route}
// </div>, app);

ReactDOM.render(
    <div className="sd-container">
        {route}
    </div>
    , document.getElementById("container"));