
"use strict";

const Collection = require("../Base/Collection");

class DataStore extends Collection {

    /**
     * Base class that manages the creation, retrieval and deletion of a specific data model.
     * @param {Array|Object} [Iterable] Optional initial values of this DataStore.
     * @example class MyManager extends Qulity.Manager
     */
    constructor (Iterable = {}) {

        super();

        if (Iterable instanceof Array)
        for (const Key in Iterable) this.set(Iterable[Key][0], Iterable[Key][1]);
        else for (const Key in Iterable) this.set(Key, Iterable[Key]);

    }
}

module.exports = DataStore;
