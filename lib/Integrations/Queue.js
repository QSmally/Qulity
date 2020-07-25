
"use strict";

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
         * @private
         */
        Object.defineProperty(this, "Values", {value: []});
        for (const Val of Iterable) this.Values.push(Val);

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
    Add (Val) {

    }

    /**
     * Removes an element from the Queue.
     * @param {Number} Idx Index of the entry to remove.
     * @returns {Number} New size of this Queue.
     */
    Remove (IdxOrFn) {

    }

    /**
     * Fetches the current value in the Queue and removes it.
     * @returns {*}
     */
    Next () {

    }

    /**
     * Iterates over this Queue. Note - This function does not shift the Queue.
     * Remove them yourself with the third argument in the function.
     * @param {Function} fn Function to execute per entry on this Queue.
     * @param {Object|Array} [Iterable] Optional initial values for the cache of this iterate.
     * @returns {DataStore|Queue} When an iterable is passed, a DataStore, otherwise this Queue.
     */
    Iterate (fn, Iterable = null) {

    }

}

module.exports = Queue;
