
"use strict";

class Collection extends Map {

    /**
     * An extended JavaScript Map with additional optimisations, properties and methods.
     * @param {Array|Object} [Iterable] Optional initial values of this Collection.
     * @example const Col = new Qulity.Collection(Iterable?);
     * @extends {Map}
     */
    constructor (Iterable = {}) {

        super();

        if (Iterable instanceof Array)
        for (const Key in Iterable) this.set(Iterable[Key][0], Iterable[Key][1]);
        else for (const Key in Iterable) this.set(Key, Iterable[Key]);

    }


}
