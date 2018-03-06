import {Random, mock} from 'mockjs';

mock(/api\/menu\.do/, {
    'code': 200,
    'data': {
        "list": [
            {
                "children": [
                    {
                        "id": 10000101,
                        "name": "About Me",
                        "router": "about",
                        "type": "menu",
                        "icon": "title",
                        "leaf": true,
                        "parentId": 100001
                    },
                    {
                        "id": 10000102,
                        "name": "Introduce",
                        "router": "introduce",
                        "type": "menu",
                        "icon": "title",
                        "leaf": true,
                        "parentId": 100001
                    },
                    {
                        "id": 10000103,
                        "name": "Emitte",
                        "router": "emitte",
                        "type": "menu",
                        "icon": "title",
                        "leaf": true,
                        "parentId": 100001
                    }
                ],
                "id": 100001,
                "name": "Test Title",
                "type": "menu",
                "icon": "title",
                "leaf": false
            },{
                "children": [
                    {
                        "id": 10000201,
                        "name": "Test",
                        "router": "test",
                        "type": "menu",
                        "icon": "title",
                        "leaf": true,
                        "parentId": 100002
                    }
                ],
                "id": 100002,
                "name": "Second Title",
                "type": "menu",
                "icon": "title",
                "leaf": false
            },{
                "children": [
                    {
                        "id": 10000301,
                        "name": "Child",
                        "router": "child",
                        "type": "menu",
                        "icon": "title",
                        "leaf": true,
                        "parentId": 100003
                    }
                ],
                "id": 100003,
                "name": "Tree",
                "type": "menu",
                "icon": "title",
                "leaf": false
            }
        ],
        "totle": 80,
        "pageSize": 20,
        "pageNumber": 1
    }
});