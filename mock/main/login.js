import {Random, mock} from 'mockjs';

mock(/api\/user\/login.do/, {
    'code': 200,
    'data': {
        'username': Random.name(true),
        'id|10000-99999': 99999,
        'siteCode|10000-99999': 99999
    }
});