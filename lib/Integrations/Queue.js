
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
     * @type {Number}
     * @readonly
     */
    get size () {
        return this.Values.length;
    }

    /**
     * Adds a new entry to the end of this Queue.
     * @param {*} Val Value to be added to the Queue.
     * @returns {Number} New size of this Queue, the waiting size.
     */
    add (Val) {
        if (this.Values.includes(Val)) return null;
        this.Values.push(Val);
        return this.size;
    }

    /**
     * Removes an element from the Queue.
     * @param {Number} Idx Index of the entry to remove.
     * @returns {Number} New size of this Queue.
     */
    remove (Idx) {
        if (typeof Idx !== "number") return this.size;
        if (Idx < 0) return this.size;

        this.Values.splice(Idx, 1);
        return this.size;
    }

    /**
     * Fetches the current value in the Queue and removes it.
     * @returns {*}
     */
    next () {
        const Current = this.Values[0];
        this.Values.shift();
        return Current;
    }

    /**
     * Iterates over this Queue. Note - This function removes all the items from the Queue after iterating.
     * @param {Function} fn Function to execute per entry on this Queue.
     * @param {Object|Array} [Iterable] Optional initial values for the cache of this iterate.
     * @returns {DataStore|Queue} When an iterable is passed, a DataStore, otherwise this Queue.
     */
    iterate (fn, Iterable = null) {
        const IdxDS = new DataStore(Iterable);

        if (typeof fn !== "function") return Iterable ? IdxDS : this;
        for (const Val of this.Values) fn(Val, IdxDS, this.Values.indexOf(Val));
        
        this.Values.splice(0, this.Values.length);
        return Iterable ? IdxDS : this;
    }

}

module.exports = Queue;
