
"use strict";

const Cache = require("./Cache");
const {EventEmitter} = require("events");

class ActiveCache extends Cache {

    /**
     * Extended class that implements an events driver.
     * @param {Array|Object} [Iterable] Optional initial values of this Cache.
     * @example const AC = new Qulity.ActiveCache(Iterable?);
     * @extends {EventEmitter}
     */
    constructor (Iterable = {}) {

        super();

        if (Iterable instanceof Array)
        for (const Key in Iterable) this.set(Iterable[Key][0], Iterable[Key][1]);
        else for (const Key in Iterable) this.set(Key, Iterable[Key]);

        /**
         * An event manager for this ActiveCache.
         * @name BaseManager#_eventEmitter
         * @type {EventEmitter}
         * @private
         */
        Object.defineProperty(this, "_eventEmitter", {
            value: new EventEmitter()
        });

    }

}

module.exports = ActiveCache;
