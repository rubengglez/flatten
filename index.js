const WrongValueType = require("./WrongValueType");

const flatten = (arrayToFlatten) => {
    if (!Array.isArray(arrayToFlatten)) {
        throw new WrongValueType(arrayToFlatten)
    }

    return arrayToFlatten.reduce((acc, value) => {
        if (Array.isArray(value)) {
            return acc.concat(flatten(value))
        }
        return acc.concat(value)
    }, [])
}

module.exports = flatten;