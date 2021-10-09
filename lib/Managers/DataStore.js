
"use strict";

const Collection = require("../Base/Collection");

class DataStore extends Collection {

    /**
     * Base class that manages the creation, retrieval and deletion of a specific data model.
     * @param {Array|Object} [iterable] Optional initial values of this DataStore.
     * @example const DS = new Qulity.DataStore(Iterable?);
     * @extends {Collection}
     */
    constructor (iterable = {}) {
        super(iterable);
    }

    /**
     * An entry of this DataStore.
     * @typedef {Function|Object} DataModel
     */

    /**
     * Inserts or updates a model.
     * @param {String|Number} keyContext Key of the model to be inserted.
     * @param {Function|Object|DataModel} model The data model to set into the DataStore.
     * @returns {DataStore}
     */
    set (keyContext, model) {
        if (!["function", "object"].includes(typeof model))    return null;
        if (!["string", "number"].includes(typeof keyContext)) return null;
        return super.set(keyContext, model);
    }

    /**
     * Resolves a data model.
     * @param {String|Number} keyContext Key of the model to be resolved.
     * @returns {DataModel} Model that got resolved or cached.
     */
    resolve (keyContext) {
        return super.get(keyContext);
    }
}

module.exports = DataStore;
