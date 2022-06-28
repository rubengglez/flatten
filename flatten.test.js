const flatten = require("./");
const WrongValueType = require("./WrongValueType");

test('error WrongValueType should be thrown when a value different from an array is given', () => {
    const data = [
        {
            input: 1
        },
        {
            input: "1"
        },
        {
            input: true
        },
        {
            input: {}
        },
        {
            input: null
        },
        {
            input: NaN
        }
    ]
    data.forEach(given => {
        expect(() => flatten(given.input)).toThrow(WrongValueType)
    })
})