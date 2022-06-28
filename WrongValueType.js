class WrongValueType extends Error
{
    constructor(input) {
        super(`Input type given ${typeof input} is invalid. It should be an array`);
        this.name = 'WrongValueType'
    }
}

module.exports = WrongValueType