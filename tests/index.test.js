import sum from "../index";

describe('test index.js', () => {

    test('sum function with arg', () => {
        expect(sum(1, 2)).toBe(3);
    });
    
    test('sum function without arg', () => {
        expect(sum()).toBe(false);
    });
})
