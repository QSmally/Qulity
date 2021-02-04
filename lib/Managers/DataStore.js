
"use strict";

const Collection = require("../Base/Collection");

class DataStore extends Collection {

    /**
     * Base class that manages the creation, retrieval and deletion of a specific data model.
     * @param {Array|Object} [Iterable] Optional initial values of this DataStore.
     * @example const DS = new Qulity.DataStore(Iterable?);
     * @extends {Collection}
     */
    constructor (Iterable = {}) {

        super();

        if (Iterable instanceof Array)
        for (const Key in Iterable) this.set(Iterable[Key][0], Iterable[Key][1]);
        else for (const Key in Iterable) this.set(Key, Iterable[Key]);

    }


    /**
     * Sets a model into the DataStore.
     * @param {String|Number} Key Key of the model to be inserted.
     * @param {Function|Object|DataModel} Model The data model to set into the DataStore.
     * @returns {DataStore}
     */
    set (Key, Model) {
        if (!["function", "object"].includes(typeof Model)) return null;
        if (!["string", "number"].includes(typeof Key))     return null;
        return super.set(Key, Model);
    }

    /**
     * Resolves a data model.
     * @param {String|Number} Key Key of the model to be resolved.
     * @returns {DataModel} Model that got resolved or cached.
     */
    resolve (Key) {
        const Model = super.get(Key);
        return Model;
    }

}

module.exports = DataStore;


/**
 * An entry of this DataStore.
 * @typedef {Function|Object} DataModel
 */
