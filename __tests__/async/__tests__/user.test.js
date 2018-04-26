jest.mock('../request');

import * as user from '../user';

//the assertion for a promise must be returned.
it('works with promises', () => {
    expect.assertions(1);
    return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});

//async/await can be used.
it('works with async/await', async () => {
    expect.assertions(1);
    const data = await user.getUserName(4);
    expect(data).toEqual('Mark');
})