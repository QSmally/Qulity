
"use strict";

class Collection extends Map {

    /**
     * An extended JavaScript Map with additional utility methods.
     * @param {Array|Object} [Iterable] Optional initial values of this Collection.
     * @example const Coll = new Qulity.Collection(Iterable?);
     * @extends {Map}
     */
    constructor (Iterable = {}) {

        super();

        for (const Key in Iterable) {
            if (Iterable instanceof Array)
            this.set(Iterable[Key][0], Iterable[Key][1]);
            else this.set(Key, Iterable[Key]);
        }

    }


    // Interaction points

    /**
     * Main interaction point of this Collection.
     * @param {*} Key Specifies a key to insert as.
     * @param {*} Val A value to be set under the address.
     * @returns {Collection}
     */
    set (Key, Val) {
        super.set(Key, Val);
        return this;
    }

    /**
     * Main interaction point of this Collection.
     * @param {*} Key Specifies a key to fetch from this Collection.
     * @returns {*} Element if found.
     */
    get (Key) {
        return super.get(Key);
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


    // Migration units

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

    /**
     * Creates an ordered object of all the entries of this Collection.
     * @returns {Object} Object of all key/value pairs of this Collection.
     */
    toObject () {
        const Obj = {};
        for (const [Key, Val] of this) Obj[Key] = Val;
        return Obj;
    }


    // Utility methods

    /**
     * Obtains the first value(s) from this Collection. Starting from the end if a negative amount is provided.
     * @param {Number} [Amount] Amount of values to obtain from the beginning.
     * @returns {*|Array} A single value, or an array of values if there's an amount provided.
     */
    first (Amount = 1) {
        if (typeof Amount !== "number") return null;

        if (Amount === 1) return super.values().next().value;
        if (Amount < 0)   return this.last(Amount * -1);
        if (Amount === 0) return null;

        const Amt  = Math.min(this.size, Amount);
        const Arr  = new Array(Amt);
        const Iter = this.values();

        for (let i = 0; i < Amt; i++)
        Arr[i] = Iter.next().value;
        return Arr;
    }

    /**
     * Obtains the last value(s) from this Collection. Starting from the beginning if a negative amount is provided.
     * @param {Number} [Amount] Amount of values to obtain from the end.
     * @returns {*|Array} A single value, or an array of values if there's an amount provided.
     */
    last (Amount = 1) {
        const Arr = this.toArray();
        if (typeof Amount !== "number") return null;

        if (Amount < 0)   return this.first(Amount * -1);
        if (Amount === 1) return Arr[Arr.length - 1];
        if (Amount === 0) return null;

        const Amt = Math.min(this.size, Amount);
        return Arr.slice(-Amt).reverse();
    }

    /**
     * Obtains unique random value(s) from this Collection.
     * @param {Number} [Amount] Amount of values to obtain randomly.
     * @returns {*|Array} A single value, or an array of values if there's an amount provided.
     */
    random (Amount = 1) {
        var Arr = this.toArray();

        if (typeof Amount !== "number") return null;
        if (Amount < 0)   return undefined;
        if (Amount === 1) return Arr[Math.abs(Math.round(Math.random() * Arr.length) - 1)];

        const Rand = new Array(Amount);
        Amount = Math.min(this.size, Amount);
        Arr    = Arr.slice();

        for (let i = 0; i < Amount; i++)
        Rand[i] = Arr.splice(Math.min(Arr.length, Math.round(Math.random() * Arr.length) - 1), 1)[0];
        return Rand;
    }

    /**
     * Searches for a single item where the given function returns a truthy value. This behaves like
     * [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
     * @param {Function} cfn Function used to test with.
     * @param {*} [This] Value to use as `this` when executing functions.
     * @returns {*} Returns the value of the element found.
     */
    find (Cfn, This) {
        if (typeof This !== "undefined") Cfn = Cfn.bind(This);

        for (const [Key, Val] of this) {
            if (Cfn(Val, Key, this)) return Val;
        }

        return undefined;
    }

    /**
     * Removes entries that satisfy the provided filter function.
     * @param {Function} Cfn Function used to test with.
     * @param {*} [This] Value to use as `this` when executing functions.
     * @returns {Number} Number of removed entries.
     */
    sweep (Cfn, This) {
        if (typeof This !== "undefined") Cfn = Cfn.bind(This);
        const PrevSize = this.size;

        for (const [Key, Val] of this) {
            if (Cfn(Val, Key, this)) super.delete(Key);
        }

        return PrevSize - this.size || 0;
    }

    /**
     * Identical to `Array.filter()`, but returns a Collection instead of an array.
     * @param {Function} Cfn Function used to test with.
     * @param {*} [This] Value to use as `this` when executing functions.
     * @returns {Collection} Returns the new filtered Collection.
     */
    filter (Cfn, This) {
        if (typeof This !== "undefined") Cfn = Cfn.bind(This);
        const Results = new this.constructor[Symbol.species]();

        for (const [Key, Val] of this) {
            if (Cfn(Val, Key, this)) Results.set(Key, Val);
        }

        return Results;
    }

    /**
     * Partitions the Collection into two Collections, where the first Collection
     * contains the items that passed and the second contains the items that failed.
     * @param {Function} Cfn Function used to test with.
     * @param {*} [This] Value to use as `this` when executing functions.
     * @returns {Array<Collection>} An array of partitioned Collections.
     */
    partition (Cfn, This) {
        if (typeof This !== "undefined") Cfn = Cfn.bind(This);
        const Results = [new this.constructor[Symbol.species](), new this.constructor[Symbol.species]()];

        for (const [Key, Val] of this) {
            if (Cfn(Val, Key, this)) Results[0].set(Key, Val);
            else Results[1].set(Key, Val);
        }

        return Results;
    }

    /**
     * Maps each item to another value. Identical in behaviour to
     * [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
     * @param {Function} Fn Function that produces an element of the new array.
     * @param {*} [This] Value to use as `this` when executing functions.
     * @returns {Array} Returns an array of the mapped values.
     */
    map (Fn, This) {
        if (typeof This !== "undefined") Fn = Fn.bind(This);
        let Arr = new Array(this.size), i = 0;

        for (const [Key, Val] of this) Arr[i++] = Fn(Val, Key, i - 1, this);
        return Arr;
    }

    /**
     * Checks if there is an item that exists that passes a test. Identical in behaviour to
     * [Array.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).
     * @param {Function} Cfn Function used to test with.
     * @param {*} [This] Value to use as `this` when executing functions.
     * @returns {Boolean} Boolean to express whether at least one item has passed the test.
     */
    exists (Cfn, This) {
        if (typeof This !== "undefined") Cfn = Cfn.bind(This);

        for (const [Key, Val] of this) {
            if (Cfn(Val, Key, this)) return true;
        }

        return false;
    }

    /**
     * Checks if all items pass the test. Identical in behaviour to
     * [Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).
     * @param {Function} Cfn Function used to test with.
     * @param {*} [This] Value to use as `this` when executing functions.
     * @returns {Boolean} Boolean to express whether every item has passed the test.
     */
    every (Cfn, This) {
        if (typeof This !== "undefined") Cfn = Cfn.bind(This);

        for (const [Key, Val] of this) {
            if (!Cfn(Val, Key, this)) return false;
        }

        return true;
    }

    /**
     * Applies a function to produce a single value. Identical in behaviour to
     * [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).
     * @param {Function} Fn Function used to reduce, taking four arguments; `Accumulator`, `CurVal`, `CurKey` & `this`.
     * @param {*} [Init] Starting value for the accumulator.
     * @returns {*}
     */
    reduce (Fn, Init) {
        let Accumulator;
        if (typeof Init !== "undefined") {
            Accumulator = Init;
            for (const [Key, Val] of this) Accumulator = Fn(Accumulator, Val, Key, this);
        } else {
            let First = true;

            for (const [Key, Val] of this) {
                if (First) {
                    Accumulator = Val;
                    First = false;
                } else {
                    Accumulator = Fn(Accumulator, Val, Key, this);
                }
            }
        }

        return Accumulator;
    }

    /**
     * Returns a new Collection containing items where the keys are present in both original structures.
     * @param {Collection} Second A Collection to filter against.
     * @returns {Collection}
     */
    intersect (Second) {
        return Second.filter((_, Key) => super.has(Key));
    }

    /**
     * Returns a new Collection containing items where the key is present in one of the original structures, but not the other.
     * @param {Collection} Second A Collection to filter against.
     * @returns {Collection}
     */
    difference (Second) {
        return Second.filter((_, Key) => !super.has(Key))
        .merge(this.filter((_, Key) => !Second.has(Key)));
    }

    /**
     * Passes the Collection's in the function and returns the Collection itself.
     * @param {Function} Fn Function to execute on the Collection.
     * @returns {Collection}
     */
    tap (Fn) {
        if (typeof Fn === "function") Fn(this, this.size);
        return this;
    }

    /**
     * Iterates on the Collection's items and returns the Collection itself.
     * @param {Function} Fn Function to execute on each element.
     * @returns {Collection}
     */
    each (Fn) {
        if (typeof Fn === "function") {
            let i = 0;
            for (const [Key, Val] of this) Fn(Val, Key, i++, this);
        }

        return this;
    }

    /**
     * Creates an identical, shallow copy of this Collection.
     * @returns {Collection}
     */
    clone () {
        return new this.constructor[Symbol.species](this.toObject());
    }

    /**
     * Combines this Collection with others into a new Collection. None of the source Collections will be modified.
     * @param {...Collections} Collections Collections to merge into one.
     * @returns {Collection}
     */
    merge (...Collections) {
        const Clone = this.clone();

        for (const Coll of Collections) {
            for (const [Key, Val] of Coll) Clone.set(Key, Val);
        }

        return Clone;
    }

    /**
     * Sorts all the elements in the Collection and returns it.
     * @param {Function} [Cfn] Specifies a function that defines the sort order.
     * If omitted, the Collection is sorted according to each character's Unicode point value,
     * according to the string conversion of each element.
     * @param {*} [This] Value to use as `this` when executing functions.
     * @returns {Collection}
     */
    sort (Cfn, This) {
        if (typeof thisv !== "undefined") Cfn = Cfn.bind(This);
        const Entries = [...super.entries()];
        super.clear();

        Entries.sort((a, b) => Cfn(a[1], b[1], [a[0], b[0]]));
        for (const [Key, Val] of Entries) this.set(Key, Val);

        return this;
    }

}

module.exports = Collection;
