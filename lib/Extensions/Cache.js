
"use strict";

const Collection = require("../Base/Collection");

class Cache extends Collection {

    /**
     * Base class that manages additional utility functions and other features.
     * @param {Array|Object} [iterable] Optional initial values of this Cache.
     * @example const CC = new Qulity.Cache(Iterable?);
     * @extends {Collection}
     */
    constructor (iterable = {}) {
        super(iterable)
    }

    /**
     * Ensures an entry being in this Cache map.
     * @param {*} keyContext Specifies the address for the value.
     * @param {*} value A value to be conditionally inserted.
     * @returns {Boolean} Whether or not a new value was inserted.
     */
    default (keyContext, value) {
        if (this.has(keyContext)) return false;
        this.set(keyContext, value);
        return true;
    }
}

module.exports = Cache;
