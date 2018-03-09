import {Random, mock} from 'mockjs';

mock(/api\/child\/list.do/, {
    'code': 200,
    'success': true,
    'data|1-20':[{
        'name': mock('@first'),
        'id|10000-99999': 99999,
        'code|10000-99999': 99999,
        'column1': mock('@string("lower", 1, 5)'),
        'column2': mock('@first'),
        'column3': mock('@first'),
        'column4': mock('@first'),
        'column5': mock('@first'),
        'column6': mock('@first'),
        'column7': mock('@first'),
        'column8': mock('@first'),
    }] 
});