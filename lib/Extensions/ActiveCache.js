
"use strict";

const Cache            = require("./Cache");
const { EventEmitter } = require("events");

class ActiveCache extends Cache {

    /**
     * Extended class that implements an events driver.
     * @param {Array|Object} [iterable] Optional initial values of this Cache.
     * @example const AC = new Qulity.ActiveCache(Iterable?);
     * @extends {EventEmitter}
     */
    constructor (iterable = {}) {
        super(iterable);

        /**
         * An event manager for this ActiveCache.
         * @name ActiveCache#_emitter
         * @type {EventEmitter}
         * @private
         */
        this._emitter = new EventEmitter();
    }

    /**
     * Current types of events.
     * @typedef {String} Event
     * @param {String} set
     * @param {String} delete
     */

    /**
     * Registers a handler for this ActiveCache.
     * @param {Event} event An event to handle.
     * @param {Function} handler A handler for this registered event.
     * @returns {ActiveCache}
     */
    on (event, handler) {
        this._emitter.on(event, handler);
        return this;
    }

    set (keyContext, value) {
        super.set(keyContext, value);
        this._emitter.emit("set", keyContext, value);
        return this;
    }

    delete (keyContext) {
        super.delete(keyContext);
        this._emitter.emit("delete", keyContext);
        return this;
    }
}

module.exports = ActiveCache;
