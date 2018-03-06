const MockContext = require.context('./', true, /\.js$/);

const MockKeys = MockContext.keys().filter(item => item !== './index.js');

const MockData = MockKeys.reduce((data, value) => {
    data[value] = MockContext(value);
    return data; 
}, {});

export default MockData;