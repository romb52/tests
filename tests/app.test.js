import {printW} from "../app";

describe('test app.js', () => {

    test('prnt function without arg', () => {
        expect(printW()).toBe("Hello");
    });
})
   
