import {Random, mock} from 'mockjs';

mock(/api\/child\/list.do/, {
    'code': 200,
    'message': '接口格式异常，请联系管理员！',
    'success': true,
    'data':{
        'list|10-30': [{
            'name': mock('@first'),
            'id|10000-99999': 99999,
            'code|10000-99999': 99999,
            'status|0-1': 0, 
            'column1': mock('@string("lower", 4, 5)'),
            'column2': mock('@first'),
            'column3': mock('@first'),
            'column4': mock('@first'),
            'column5': mock('@first'),
            'column6': mock('@first'),
            'column7': mock('@first'),
            'column8': mock('@first'),
        }],
        'total|20-500': 20,
    } 
});