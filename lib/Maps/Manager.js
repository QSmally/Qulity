
"use strict";

const DataStore = require("./DataStore");

class BaseManager {

    /**
     * Manages the API methods of data models and holds its cache.
     * @param {Array|Object} [Iterable] Optional initial values of this Manager.
     * @param {Function} [Holds] An optional structure belonging to this Manager.
     * @example class MyManager extends Qulity.Manager
     */
    constructor (Iterable = {}, Holds = null) {

        /**
         * Cached dataset instances of this Manager.
         * @name BaseManager#Cache
         * @type {DataStore}
         * @readonly
         */
        Object.defineProperty(this, "Cache", {
            enumerable: true,
            value: new DataStore()
        });

        if (Iterable instanceof Array)
        for (const Entry of Iterable) this.add(Entry[0], Entry[1]);
        else for (const Id in Iterable) this.add(Id, Iterable[Id]);

        /**
         * Data structure belonging to this Manager.
         * @name BaseManager#Holds
         * @type {Function}
         * @private
         * @readonly
         */
        Object.defineProperty(this, "Holds", {
            enumerable: true,
            value: Holds
        });

    }


    /**
     * Inserts an instance into this Manager's cache.
     * @param {String} Id Identifier string for the data model.
     * @param {Object|Array|Function|DataModel} Model Data model to add to this Manager.
     * @returns {BaseManager} The updated Manager instance.
     */
    add (Id, Model) {
        if (typeof Id !== "string")                            return null;
        if (this.Cache.find(Model => Model._DataStore === Id)) return null;
        if (this.Holds && !(Model instanceof this.Holds))      return null;

        this.Cache.set(Id, Model);
        return this;
    }

    /**
     * Removes an instance from this Manager's cache.
     * @param {String} Id ID string of the instance.
     * @returns {Manager} The updated Manager instance.
     */
    remove (Id) {
        if (typeof Id !== "string") return null;
        if (!this.Cache.find(Model => Model._DataStore === Id)) return null;

        this.Cache.delete(Id);
        return this;
    }

    /**
     * Serialises this Manager's cache into an object, while still preserving its original data.
     * @returns {Object} The object-form of this Manager's data cache.
     */
    toObject () {
        return Object.fromEntries(this.Cache.map((Val, Key) => {
            delete Val._DataStore;
            return [Key, Val];
        }));
    }

    /**
     * Resolves an instance of this Manager.
     * @param {String|*} IdOrInstance The key of the instance to resolve.
     * @returns {DataModel} An instance from this Manager.
     */
    resolve (IdOrInstance) {
        if (this.Holds && IdOrInstance instanceof this.Holds) return this.Holds;
        if (typeof IdOrInstance !== "string") return null;
        return this.Cache.resolve(IdOrInstance) || undefined;
    }

}

module.exports = BaseManager;
