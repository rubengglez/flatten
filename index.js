const WrongValueType = require("./WrongValueType");

const flatten = (arrayToFlatten) => {
    if (!Array.isArray(arrayToFlatten)) {
        throw new WrongValueType(arrayToFlatten)
    }
}

module.exports = flatten;