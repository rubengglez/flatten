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

test('it should do nothing when empty array is given', () => {
    const input = []
    const expected = []
    expect(flatten(input)).toStrictEqual(expected)
})

test('it should do nothing when array is already flattened', () => {
    const input = [1, 2, 3]
    const expected = [1, 2, 3]
    expect(flatten(input)).toStrictEqual(expected)
})

test('it should flatten an array when a nested array of values is given', () => {
    const input = [ 1, [ 2, [ 3 ] ], 4 ]
    const expected = [ 1, 2, 3, 4 ]
    expect(flatten(input)).toStrictEqual(expected)
})

test('it should flatten an array when a very very nested array of values is given', () => {
    const input = [[[[[[[1, 2]]]]]]]
    const expected = [1, 2]
    expect(flatten(input)).toStrictEqual(expected)
})

test('it should flatten an array removing empty slots when a very very nested array of values is given', () => {
    const input = [[[[[[[1], , 2]]]]]]
    const expected = [1, 2]
    expect(flatten(input)).toStrictEqual(expected)
})

test('it should flatten an array when a nested array of different values is given', () => {
    const input = [[[[[[[1], [""], {"hello": "Alice"}, ["best comment ever"]] , [[[2]]]]]]]]
    const expected = [1, "", {"hello": "Alice"}, "best comment ever", 2]
    expect(flatten(input)).toStrictEqual(expected)
})