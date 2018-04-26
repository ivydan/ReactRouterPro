const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
};

export default function request(url) {
    return new Promise((resolve, reject) => {
        const userID = parseInt(url.substr('/users/'.length), 10);
        //将一个回到函数放在下次事件循环的顶部（模拟异步事件？）
        process.nextTick(
            () => users[userID] ? resolve(users[userID]) :
                reject({
                    error: 'User with' + userID + 'not found.'
                })
        )
    })
};