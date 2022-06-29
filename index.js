const WrongValueType = require("./WrongValueType");

const flatten = (arrayToFlatten) => {
    if (!Array.isArray(arrayToFlatten)) {
        throw new WrongValueType(arrayToFlatten)
    }

    return arrayToFlatten
}

module.exports = flatten;