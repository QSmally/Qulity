
"use strict";

const Collection = require("../Base/Collection");

class BaseManager {

    /**
     * Manages the API methods of data models and holds its cache.
     * @param {Array|Object} [iterable] Optional initial values of this Manager.
     * @param {Function} [holds] An optional data stricture belonging to this Manager.
     * @example class MyManager extends Qulity.Manager
     * @implements Collection
     */
    constructor (iterable = {}, holds = null) {

        /**
         * Cached dataset entries of this Manager.
         * @name BaseManager#cache
         * @type {Collection}
         * @readonly
         */
        this.cache = new Collection();

        for (const keyContext in iterable) {
            Array.isArray(iterable) ?
                this.cache.set(iterable[keyContext][0], iterable[keyContext][1]) :
                this.cache.set(keyContext, iterable[keyContext]);
        }

        /**
         * A structure belonging to this Manager.
         * @name BaseManager#holds
         * @type {Function?}
         * @readonly
         */
        this.holds = holds;
    }

    /**
     * Inserts an instance into this Manager's cache.
     * @param {String} identifier Identifier string for the address of this model.
     * @param {Function|*} model A data model to add to this Manager.
     * @returns {Manager}
     */
    add (identifier, model) {
        if (typeof identifier !== "string")               return null;
        if (this.cache.has(identifier))                   return null;
        if (this.holds && !(model instanceof this.holds)) return null;

        this.cache.set(identifier, model);
        return this;
    }

    /**
     * Removes an instance from this Manager's cache.
     * @param {String} identifier Identifier string of the instance.
     * @returns {Manager}
     */
    remove (identifier) {
        if (typeof identifier !== "string") return null;
        if (!this.cache.has(identifier))    return null;

        this.cache.delete(identifier);
        return this;
    }

    /**
     * Resolves an instance of this Manager.
     * @param {String|Function|*} idOrInstance Identifier to resolve from this Manager.
     * @returns {Function|*} A data model resolved from this Manager's cache.
     */
    resolve (idOrInstance) {
        if (this.holds && idOrInstance instanceof this.holds) return this.holds;
        if (typeof idOrInstance !== "string") return null;
        return this.cache.get(idOrInstance);
    }
}

module.exports = BaseManager;
