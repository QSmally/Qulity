
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


    // ---------------------------------------------------------------- Lookup functions

    /**
     * Obtains the first value(s) from this Collection. Starting from the end if a negative amount is provided.
     * @param {Number} [Amount] Amount of values to obtain from the beginning.
     * @returns {*|Collection} A single value, or a new Collection of entries if there's an amount provided.
     */
    first (Amount = 1) {
        if (typeof Amount !== "number") return null;

        if (Amount === 1) return super.values().next().value;
        if (Amount < 0)   return this.last(Amount * -1);
        if (Amount === 0) return null;

        const Amt  = Math.min(this.size, Amount);
        const Arr  = new Array(Amt);
        const Iter = this.entries();

        for (let i = 0; i < Amt; i++)
        Arr[i] = Iter.next().value;
        return new this.constructor(Arr);
    }

    /**
     * Obtains the last value(s) from this Collection. Starting from the beginning if a negative amount is provided.
     * @param {Number} [Amount] Amount of values to obtain from the end.
     * @returns {*|Collection} A single value, or a new Collection of entries if there's an amount provided.
     */
    last (Amount = 1) {
        if (typeof Amount !== "number") return null;

        if (Amount === 1) return this.toArray()[this.size - 1];
        if (Amount < 0)   return this.first(Amount * -1);
        if (Amount === 0) return null;

        const Iter = [...this.entries()];

        const Amt = Math.min(this.size, Amount);
        return new this.constructor(Iter.slice(-Amt).reverse());
    }

    /**
     * Searches for a specific item where the given function returns a truthy value.
     * @param {Function} Fn Function used to test iterating elements with.
     * @returns {*} Returns the value of the element found.
     */
    find (Fn) {
        if (typeof Fn !== "function") return null;
        
        Fn = Fn.bind(this);
        for (const [Key, Val] of this)
        if (Fn(Val, Key, this)) return Val;

        return undefined;
    }

    /**
     * Checks if there is an item that exists that passes a test.
     * @param {Function} Fn Function used to test iterating elements with.
     * @returns {Boolean} Returns a boolean based on whether or not an element was found.
     */ 
    exists (Fn) {
        if (typeof Fn !== "function") return null;

        Fn = Fn.bind(this);
        for (const [Key, Val] of this)
        if (Fn(Val, Key, this)) return true;

        return false;
    }

}

module.exports = Collection;
