
"use strict";

const Collection = require("../Base/Collection");

class BaseManager {

    /**
     * Manages the API methods of data models and holds its cache.
     * @param {Array|Object} [Iterable] Optional initial values of this Manager.
     * @param {Function} [Holds] An optional data stricture belonging to this Manager.
     * @example class MyManager extends Qulity.Manager
     */
    constructor (Iterable = {}, Holds = null) {

        /**
         * Cached dataset entries of this Manager.
         * @name BaseManager#cache
         * @type {Collection}
         * @readonly
         */
        Object.defineProperty(this, "cache", {
            enumerable: true,
            value: new Collection()
        });

        if (Iterable instanceof Array)
        for (const Key in Iterable) this.cache.set(Iterable[Key][0], Iterable[Key][1]);
        else for (const Key in Iterable) this.cache.set(Key, Iterable[Key]);

        /**
         * A structure belonging to this Manager.
         * @name BaseManager#holds
         * @type {Function?}
         * @private
         */
        Object.defineProperty(this, "holds", {
            enumerable: true,
            value: Holds
        });

    }

}

module.exports = BaseManager;
