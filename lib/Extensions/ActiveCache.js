
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

    /**
     * Registers a handler for this ActiveCache.
     * @param {Event} Event An event to handle.
     * @param {Function} Handler A handler for this registered event.
     * @returns {ActiveCache}
     */
    on (Event, Handler) {
        this._eventEmitter.on(Event, Handler);
        return this;
    }


    set (Key, Value) {
        super.set(Key, Value);
        this._eventEmitter.emit("set", Key, Value);
        return this;
    }

    delete (Key) {
        super.delete(Key);
        this._eventEmitter.emit("delete", Key);
        return this;
    }

}

module.exports = ActiveCache;


/**
 * Current types of events.
 * @typedef {String} Event

 * @param {String} set
 * @param {String} delete
 */
