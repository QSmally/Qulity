
"use strict";

const Collection = require("../Maps/Collection");

class IntegerList {

    /**
     * An integer list for keeping track of tags.
     * @example const Infractions = new Qulity.IntegerList();
     */
    constructor () {
        /**
         * List of tags and integers of this Cache.
         * @name Cache#_
         * @type {Collection}
         * @private
         * @readonly
         */
        Object.defineProperty(this, "_", {
            value: new Collection()
        });
    }


    /**
     * Returns all the tag/integer pairs of this list.
     * @returns {Collection}
     */
    get entries () {
        return this._;
    }

    /**
     * Fetches the value of a tag.
     * @param {*} Tag Tag to retrieve.
     * @returns {Number} Integer at this tag.
     */
    entry (Tag) {
        return this._.get(Tag);
    }


    /**
     * Inserts a 0 as some tag into this list,
     * unless there's already an entry as this tag.
     * @param {*} Tag An address tag to write as.
     * @returns {IntegerList}
     */
    insert (Tag) {
        if (!this._.has(Tag)) this._.set(Tag, 0);
        return this;
    }

    /**
     * Increments the value of some tag in this list.
     * Will insert a 1 if this tag doesn't exist in the list.
     * @param {*} Tag At address to increment.
     * @returns {Number} The new integer at this tag.
     */
    increment (Tag) {
        return this.add(Tag, 1);
    }

    /**
     * Decrements the value of some tag in this list.
     * Will insert a 0 if this tag doesn't exist in the list.
     * @param {*} Tag At address to decrement.
     * @returns {Number} The new integer at this tag.
     */
    decrement (Tag) {
        return this.add(Tag, -1);
    }

    /**
     * Adds some value to the integer at the tag. Can be a negative number.
     * Will insert the integer if this tag doesn't exist in the list.
     * @param {*} Tag At address to add to.
     * @param {Number} Int Integer to add to this tag's value.
     * @returns {Number} The new integer at this tag.
     */
    add (Tag, Int) {
        if (!this._.has(Tag)) {
            this._.set(Tag, Int);
            return Int;
        } else {
            const New = this._.get(Tag) + Int;
            this._.set(Tag, New);
            return New;
        }
    }

    /**
     * Removes an entry in this list.
     * @param {*} Tag Address to remove from this list.
     * @returns {IntegerList}
     */
    remove (Tag) {
        this._.delete(Tag);
        return this;
    }

    /**
     * Resets an entry to 0 at some tag.
     * Will insert a 0 if this tag doesn't exist in the list.
     * @param {*} Tag Address to set to 0.
     * @returns {IntegerList}
     */
    reset (Tag) {
        this._.set(Tag, 0);
        return this;
    }

}

module.exports = IntegerList;
