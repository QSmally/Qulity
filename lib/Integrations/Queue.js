
"use strict";

const DataStore = require("../Maps/DataStore");

class Queue {

    /**
     * A manager for ordening values and iterating over them.
     * @param {Array} [Iterable] Initial values of this Queue.
     * @example const Queue = new Qulity.Queue(Iterable?);
     */
    constructor (Iterable = []) {

        /**
         * Main structure holding the Queue values.
         * @name Queue#Values
         * @type {Array}
         * @readonly
         */
        Object.defineProperty(this, "Values", {
            enumerable: true,
            value: [...Iterable]
        });

    }


    /**
     * Current waiting size of the Queue.
     * @name Queue#size
     * @type {Number}
     * @readonly
     */
    get size () {
        return this.Values.length;
    }

    /**
     * Adds a new entry to the end of this Queue.
     * @param {*} Val Value to be added to the Queue.
     * @param {Boolean} [Priority] Whether this item should be put at the start of the Queue.
     * @returns {Number} New size of this Queue, the waiting size.
     */
    add (Val, Priority = false) {
        if (this.Values.includes(Val)) return this.size;
        if (Priority) this.Values.unshift(Val);
        else this.Values.push(Val);
        return this.size;
    }

    /**
     * Removes an element from the Queue.
     * @param {Number} Idx Index of the entry to remove.
     * @param {Number|Function} IdxOrFn Index of the entry, or a function to compare with.
     * @returns {Number} New size of this Queue.
     */
    remove (IdxOrFn) {
        switch (typeof IdxOrFn) {
            case "number":
                if (IdxOrFn < 0) return this.size;
                this.Values.splice(IdxOrFn, 1);
                return this.size;
            
            case "function":
                for (const Val of this.Values) {
                    const Idx = this.Values.indexOf(Val);
                    if (IdxOrFn(Val, Idx)) {
                        this.Values.splice(Idx, 1);
                        return this.size;
                    }
                }

                return this.size;

            default:
                return this.size;
        }
    }

    /**
     * Fetches the current value in the Queue and removes it.
     * @returns {*} Attaches the next element of this Queue.
     */
    next () {
        const Current = this.Values[0];
        this.Values.shift();
        return Current;
    }

    /**
     * Iterates over this Queue.
     * **Note** This function removes all the items from the Queue after iterating.
     * @param {Function} Fn Function to execute per entry on this Queue.
     * @param {Object|Array} [Iterable] Optional initial values for the cache of this iterate.
     * @returns {DataStore} The available DataStore cache.
     */
    iterate (Fn, Iterable = null) {
        const IdxCache = new DataStore(Iterable);

        if (typeof Fn !== "function") return IdxCache;
        for (const Val of this.Values) Fn(Val, IdxCache, this.Values.indexOf(Val));
        
        this.Values.splice(0, this.Values.length);
        return IdxCache;
    }

}

module.exports = Queue;
