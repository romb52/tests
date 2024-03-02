import { filterCars } from "../array";

describe('test array.js', () => {
    const data = [
        { arr: [{ title: "BMW" }], word: "BMW", expectRes: [{ title: "BMW" }] },
        { arr: [{ title: "BMW" }, { title: "bmw" }], word: "bmw", expectRes: [{ title: "BMW" }, { title: "bmw" }] },
        { arr: [{ title: "BMW" }, { title: "bmw" }, { title: "ford" }], word: "bmw", expectRes: [{ title: "BMW" }, { title: "bmw" }] },
        { arr: [{ title: "ford" }], word: "bmw", expectRes: [] },
    ];

    data.map(item => {
        test(`test filterCars expect: ${ JSON.stringify(item.expectRes)} `, () => {
            expect(filterCars(item.arr, item.word)).toEqual(item.expectRes);
        });
    })

});
