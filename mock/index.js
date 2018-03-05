console.log("This is a Mock Data!");
import Mock from 'mockjs';


Mock.mock(/api\/user\/login.do/, {
    'username': '111'
});