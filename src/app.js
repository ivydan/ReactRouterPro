import React from 'react';
import ReactDOM from 'react-dom';
import route from 'utils/route';
import './app.less';

let app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<div>
    {route}
</div>, app);

// ReactDOM.render(
//     <div className="sd-container">
//         {route}
//     </div>
//     , document.getElementById("container"));