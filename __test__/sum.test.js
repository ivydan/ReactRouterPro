test('adds 1+2 to equal 3', () => {
    const sum = require('../test/sum');
    expect(sum(1, 2)).toBe(3);
});

test('Object assigenment', () => {
    let data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 })
});

test("adding positive numbers is not zero", () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 0; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

test('adding floating point numbers', () => {
    let value = 0.1 + 0.2;
    expect(value).not.toBe(0.3);
    expect(value).toBeCloseTo(0.3);
});