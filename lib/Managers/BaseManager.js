
"use strict";

const Collection = require("../Base/Collection");

class BaseManager {

    /**
     * Manages the API methods of data models and holds its cache.
     * @param {Array|Object} [Iterable] Optional initial values of this Manager.
     * @param {Function} [Holds] An optional data stricture belonging to this Manager.
     * @example class MyManager extends Qulity.Manager
     * @implements Collection
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
         * @readonly
         */
        Object.defineProperty(this, "holds", {
            enumerable: true,
            value: Holds
        });

    }


    /**
     * Inserts an instance into this Manager's cache.
     * @param {String} Id Identifier string for the address of this model.
     * @param {Function|*} Model A data model to add to this Manager.
     * @returns {Manager}
     */
    add (Id, Model) {
        if (typeof Id !== "string")                       return null;
        if (this.cache.has(Id))                           return null;
        if (this.holds && !(Model instanceof this.holds)) return null;

        this.cache.set(Id, Model);
        return this;
    }

    /**
     * Removes an instance from this Manager's cache.
     * @param {String} Id Identifier string of the instance.
     * @returns {Manager}
     */
    remove (Id) {
        if (typeof Id !== "string") return null;
        if (!this.cache.has(Id))    return null;

        this.cache.delete(Id);
        return this;
    }

    /**
     * Resolves an instance of this Manager.
     * @param {String|Function|*} IdOrInstance Identifier to resolve from this Manager.
     * @returns {Function|*} A data model resolved from this Manager's cache.
     */
    resolve (IdOrInstance) {
        if (this.holds && IdOrInstance instanceof this.holds) return this.holds;
        if (typeof IdOrInstance !== "string") return null;
        return this.cache.get(IdOrInstance);
    }

}

module.exports = BaseManager;
