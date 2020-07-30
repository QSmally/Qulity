
"use strict";

const Collection = require("./Collection");

class DataStore extends Collection {

    /**
     * Base class that manages the creation, retrieval and deletion of a specific data model.
     * @param {Array|Object} [Iterable] Optional initial values of this DataStore.
     * @example const MyDS = new Qulity.DataStore(Iterable?);
     * @extends {Collection}
     */
    constructor (Iterable = {}) {

        super();

        /**
         * Last Recently Resolved -
         * Caches the last data model that got resolved.
         * @name DataStore#LRR
         * @type {DataModel}
         * @readonly
         */
        Object.defineProperty(this, "LRR", {
            writable: true,
            value: null
        });

        for (const Key in Iterable) {
            if (Iterable instanceof Array)
            this.set(Iterable[Key][0], Iterable[Key][1]);
            else this.set(Key, Iterable[Key]);
        }

    }


    /**
     * Sets a model into the DataStore.
     * @param {String|Number} Key Key of the model to be inserted.
     * @param {Object|Array|Function|DataModel} Model The data model to set into the DataStore.
     * @returns {DataStore} The updated DataStore.
     */
    set (Key, Model) {
        if (!["function", "object"].includes(typeof Model)) return null;
        if (!["string", "number"].includes(typeof Key))     return null;

        Model._DataStore = Key;
        if (this.LRR && this.LRR._DataStore === Key) this.LRR = Model;
        return super.set(Key, Model);
    }

    /**
     * Deletes a model from the DataStore.
     * @param {String|Number} Key Key of the model to be erased.
     * @returns {DataStore} The updated DataStore.
     */
    delete (Key) {
        if (!super.has(Key)) return null;
        if (this.LRR && this.LRR._DataStore === Key) this.LRR = null;
        return super.delete(Key);
    }

    /**
     * Erases every elements from this DataStore.
     * Extended method to ensure the LRR is unavailable.
     * @returns {DataStore} The updated DataStore.
     */
    clear () {
        super.clear();
        this.LRR = null;
        return this;
    }

    /**
     * Resolves a data model.
     * @param {String|Number} Key Key of the model to be resolved.
     * @returns {DataModel} Model that got resolved or cached.
     */
    resolve (Key) {
        if (this.LRR && this.LRR._DataStore === Key) return this.LRR;

        const Model = super.get(Key);
        if (Model) this.LRR = Model;
        return Model;
    }

}

module.exports = DataStore;
