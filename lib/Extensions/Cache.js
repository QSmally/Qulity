
"use strict";

const Collection = require("../Base/Collection");

class Cache extends Collection {

    /**
     * Base class that manages additional utility functions and other features.
     * @param {Array|Object} [Iterable] Optional initial values of this Cache.
     * @example const CC = new Qulity.Cache(Iterable?);
     * @extends {Collection}
     */
    constructor (Iterable = {}) {

        super();

        if (Iterable instanceof Array)
        for (const Key in Iterable) this.set(Iterable[Key][0], Iterable[Key][1]);
        else for (const Key in Iterable) this.set(Key, Iterable[Key]);

    }


    /**
     * Ensures an entry being in this Cache map.
     * @param {*} Key Specifies the address for the value.
     * @param {*} Value A value to be conditionally inserted.
     * @returns {Boolean} Whether or not a new value was inserted.
     */
    default (Key, Value) {
        if (this.has(Key)) return false;
        this.set(Key, Value);
        return true;
    }

}

module.exports = Cache;
