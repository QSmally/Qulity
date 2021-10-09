
"use strict";

class Collection extends Map {

    /**
     * An extended JavaScript Map with additional optimisations, properties and methods.
     * @param {Array|Object} [iterable] Optional initial values of this Collection.
     * @example const Col = new Qulity.Collection(Iterable?);
     * @extends {Map}
     */
    constructor (iterable = {}) {
        super();

        for (const keyContext in iterable) {
            Array.isArray(iterable) ?
                this.set(iterable[keyContext][0], iterable[keyContext][1]) :
                this.set(keyContext, iterable[keyContext]);
        }
    }

    /**
     * Amount of key/value pairs in this Collection.
     * @name Collection#size
     * @type {Number}
     */
    get size () {
        return super.size;
    }

    // Standard methods

    /**
     * Main interaction point of this Collection.
     * @param {*} keyContext Specifies an address for this value.
     * @param {*} value A value to be inserted at the key of this document.
     * @returns {Collection}
     */
    set (keyContext, value) {
        super.set(keyContext, value);
        return this;
    }

    /**
     * Main interaction point of this Collection.
     * @param {*} keyContext Specifies a key to erase from this Collection.
     * @returns {Collection}
     */
    delete (keyContext) {
        super.delete(keyContext);
        return this;
    }

    /**
     * Main interaction point of this Collection.
     * @param {*} keyContext Specifies a key to fetch from this Collection.
     * @returns {*} If found, the element at the address of the key.
     */
    get (keyContext) {
        return super.get(keyContext);
    }

    /**
     * Main interaction point of this Collection.
     * @param {*} keyContext Specifies a key to see if it exists.
     * @returns {Boolean} A boolean value to indicate whether this element exists.
     */
    has (keyContext) {
        return super.has(keyContext);
    }

    // Migration methods

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
     * @returns {Object} Object of the key/value pairs in this Collection.
     */
    toPairObject () {
        return Object.fromEntries(super.entries());
    }

    // Search methods

    /**
     * Obtains the first value(s) from this Collection. Starting from the end if a negative amount is provided.
     * @param {Number} [amount] Amount of values to obtain from the beginning.
     * @returns {*|Collection} A single value, or a new Collection of entries if there's an amount provided.
     */
    first (amount = 1) {
        if (amount === 1) return super.values().next().value;
        if (amount < 0) return this.last(amount * -1);

        const safeAmount = Math.min(this.size, amount);
        const insertionArray = new Array(safeAmount);
        const iterable = this.entries();

        for (let i = 0; i < safeAmount; i++)
            insertionArray[i] = iterable.next().value;
        return new this.constructor[Symbol.species](insertionArray);
    }

    /**
     * Obtains the last value(s) from this Collection. Starting from the beginning if a negative amount is provided.
     * @param {Number} [amount] Amount of values to obtain from the end.
     * @returns {*|Collection} A single value, or a new Collection of entries if there's an amount provided.
     */
    last (amount = 1) {
        if (amount === 1) return this.toArray()[this.size - 1];
        if (amount < 0) return this.first(amount * -1);

        const iterable = [...this.entries()];
        const safeAmount = Math.min(this.size, amount);
        return new this.constructor[Symbol.species](iterable.slice(-safeAmount).reverse());
    }

    /**
     * Searches for a specific item where the given function returns a truthy value.
     * @param {Function} predicate Function used to test iterating elements with.
     * @returns {*} Returns the value of the element found.
     */
    find (predicate) {
        predicate = predicate.bind(this);
        for (const [keyContext, value] of this)
            if (predicate(value, keyContext, this)) return value;
    }

    /**
     * Identical to `Array.filter()`, but returns a Collection instead of an array.
     * @param {Function} predicate Function used to test the iterating elements with.
     * @returns {Collection} Returns the new, filtered Collection.
     */
    filter (predicate) {
        const results = new this.constructor[Symbol.species]();
        for (const [keyContext, value] of this)
            if (predicate(value, keyContext, this)) results.set(keyContext, value);
        return results;
    }
    
    /**
     * Removes entries that satisfy the provided filter function.
     * @param {Function} predicate Function used to test the iterating elements with.
     * @returns {Number} Returns the number of deleted entries.
     */
    sweep (predicate) {
        const previousSize = this.size;
        for (const [keyContext, value] of this)
            if (predicate(value, keyContext, this)) this.delete(keyContext);
        return previousSize - this.size;
    }

    /**
     * Partitions the Collection into two (when returning boolean values) or more Collections.
     * If a boolean was given, the first Collection contains the items that passed the test.
     * @param {Function} predicate Function used to test the iterating elements with.
     * @param {Number} [lengthExpected] Expected length, and the length of the array of Collections to return.
     * @returns {Array<Collection>} An array of partitioned Collections.
     */
    partition (predicate, lengthExpected) {
        const results = [];

        for (const [keyContext, value] of this) {
            const conditionOrIndex = predicate(value, keyContext, this);
            const insertionCollIndex = typeof conditionOrIndex === "number" ?
                conditionOrIndex :
                (conditionOrIndex ? 0 : 1);

            if (!results[insertionCollIndex])
                results[insertionCollIndex] = new this.constructor[Symbol.species]();
            results[insertionCollIndex].set(keyContext, value);
        }

        for (let i = 0; i < (lengthExpected || results.length); i++)
            if (!results[i]) results[i] = new this.constructor[Symbol.species]();
        return results;
    }

    /**
     * Applies a function to produce a single value.
     * @param {Function} transformer Function used to reduce, taking three arguments: 'accumulator', 'current value' and 'key'.
     * @param {*} [initialAccumulatorContext] A starting value for the accumulator.
     * @returns {*} Returns the reduced value.
     */
    reduce (transformer, initialAccumulatorContext) {
        if (initialAccumulatorContext !== undefined) {
            let accumulator = initialAccumulatorContext;
            for (const [keyContext, value] of this)
                accumulator = transformer(accumulator, value, keyContext, this);
            return accumulator;
        }

        let accumulator,
            isFirstItem = true;

        for (const [keyContext, value] of this) {
            accumulator = isFirstItem ?
                value :
                transformer(accumulator, value, keyContext, this);
            isFirstItem = false;
        }

        return accumulator;
    }

    /**
     * Maps each item to another value and creates an array out of it.
     * @param {Function} transformer Function that produces an element of the new array.
     * @returns {Array<*>} Returns an array of the mapped values.
     */
    map (transformer) {
        let accumulatedArray = new Array(this.size),
            arrayIteration = 0;

        for (const [keyContext, value] of this) {
            const accumulatedOutput = transformer(value, keyContext, arrayIteration - 1, this);
            accumulatedArray[arrayIteration++] = accumulatedOutput;
        }

        return accumulatedArray;
    }

    // Conditional methods

    /**
     * Checks if there is an item that exists that passes a test.
     * @param {Function} predicate Function used to test iterating elements with.
     * @returns {Boolean} Returns a boolean based on whether or not an element was found.
     */ 
    exists (predicate) {
        predicate = predicate.bind(this);
        for (const [keyContext, value] of this)
            if (predicate(value, keyContext, this)) return true;
        return false;
    }

    /**
     * Checks whether at least one item satisfies the test.
     * @param {Function} predicate Function used to test iteration elements with.
     * @returns {Boolean} Returns a boolean based on whether or not some element passed.
     */
    someSatisfy (predicate) {
        for (const [keyContext, value] of this)
            if (predicate(value, keyContext, this)) return true;
        return false;
    }

    /**
     * Checks whether all the elements in this Collection pass the test.
     * @param {Function} predicate Function used to test iterating elements with.
     * @returns {Boolean} Returns a boolean based on whether or not all elements pass the test.
     */
    everySatisfy (predicate) {
        for (const [keyContext, value] of this)
            if (!predicate(value, keyContext, this)) return false;
        return true;
    }

    // Collection management

    /**
     * Provides an identical, deep copy of this Collection.
     * @returns {Collection}
     */
    clone () {
        const { serialize, deserialize } = require("v8");
        const pairs = deserialize(serialize(this.toPairObject()));
        return new this.constructor[Symbol.species](pairs);
    }

    /**
     * Merges this Collection with other instances into a new Collection. None of the source Collections will be modified.
     * @param {...Collection} collections Collections to merge into one instance.
     * @returns {Collection}
     */
    merge (...collections) {
        const sourceClone = this.clone();
        for (const targetCollection of collections)
            for (const [keyContext, value] of targetCollection.clone())
                sourceClone.set(keyContext, value);
        return sourceClone;
    }

    /**
     * Shallowly merges the given Collections into this instance.
     * @param {...Collection} collections Collections to merge into this instance.
     * @returns {Collection}
     */
    implement (...collections) {
        for (const collection of collections)
            for (const [keyContext, value] of collection)
                this.set(keyContext, value);
        return this;
    }

    /**
     * Returns a new Collection containing items where the keys are present in both original structures.
     * @param {Collection} secondary A Collection to filter against this instance.
     * @returns {Collection}
     */
    intersect (secondary) {
        return this.filter((_, keyContext) => secondary.has(keyContext));
    }

    /**
     * Returns a new Collection containing items where the key is present in one of the original structures, but not the other.
     * @param {Collection} secondary A Collection to filter against this instance.
     * @returns {Collection}
     */
    difference (secondary) {
        const rightSide = secondary.filter((_, keyContext) => !this.has(keyContext));
        return this
            .filter((_, keyContext) => !secondary.has(keyContext))
            .implement(rightSide);
    }

    /**
     * Passes this Collection into a function and returns the Collection itself.
     * @param {Function} indenter Function used to execute on the Collection.
     * @returns {Collection}
     */
    tap (indenter) {
        indenter(this, this.size);
        return this;
    }

    /**
     * Synchronously iterates through this Collection's item and returns itself.
     * @param {Function} iterator Function to execute on each element.
     * @returns {Collection}
     */
    each (iterator) {
        for (const [keyContext, value] of this)
            iterator(value, keyContext, this);
        return this;
    }

    /**
     * Sorts all the items in this Collection and returns itself.
     * @param {Function} orderer Function that determines the sort order.
     * @returns {Collection}
     */
    sort (orderer) {
        const entries = [...super.entries()];
        super.clear();

        entries.sort((a, b) => orderer(a[1], b[1], [a[0], a[1]]));
        for (const [keyContext, value] of entries)
            this.set(keyContext, value);
        return this;
    }

    // Deprecated
    some (...parameters) {
        console.warn("Query deprecation warning: method 'some' is deprecated. Please use 'someSatisfy' instead.");
        return this.someSatisfy(...parameters);
    }

    every (...parameters) {
        console.warn("Query deprecation warning: method 'every' is deprecated. Please use 'everySatisfy' instead.");
        return this.everySatisfy(...parameters);
    }
}

module.exports = Collection;
