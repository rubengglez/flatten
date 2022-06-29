const WrongValueType = require("./WrongValueType");

const flatten = (arrayToFlatten) => {
    if (!Array.isArray(arrayToFlatten)) {
        throw new WrongValueType(arrayToFlatten)
    }

    const result = []
    arrayToFlatten.forEach(value => {
        if (Array.isArray(value)) {
            result.push(...flatten(value))
        } else {
            result.push(value)
        }
    })
    return result
}

module.exports = flatten;