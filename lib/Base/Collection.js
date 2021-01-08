
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


    /**
     * Amount of key/value pairs in this Collection.
     * @name Collection#size
     * @type {Number}
     */
    get size () {
        return super.size;
    }


    /**
     * Main interaction point of this Collection.
     * @param {*} Key Specifies an address for this value.
     * @param {*} Value A value to be inserted at the key of this document.
     * @returns {Collection}
     */
    set (Key, Value) {
        super.set(Key, Value);
        return this;
    }

    /**
     * Main interaction point of this Collection.
     * @param {*} Key Specifies a key to erase from this Collection.
     * @returns {Collection}
     */
    delete (Key) {
        super.delete(Key);
        return this;
    }

    /**
     * Main interaction point of this Collection.
     * @param {*} Key Specifies a key to fetch from this Collection.
     * @returns {*} If found, the element at the address of the key.
     */
    get (Key) {
        return super.get(Key);
    }

    /**
     * Main interaction point of this Collection.
     * @param {*} Key Specifies a key to see if it exists.
     * @returns {Boolean} A boolean value to indicate whether this element exists.
     */
    has (Key) {
        return super.has(Key);
    }


    // ---------------------------------------------------------------- Migration units

    /**
     * Creates an ordered array of the values of this Collection.
     * @returns {Array} Array of values in this Collection.
     */
    toArray () {
        return [...super.values()];
    }

    /**
     * Creates an ordered array of the keys of this Collection.
     * @returns {Array} Array of keys in this Collection.
     */
    toKeyArray () {
        return [...super.keys()];
    }

}

module.exports = Collection;
