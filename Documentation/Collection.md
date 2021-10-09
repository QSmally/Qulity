
# Collection
### Extends **{Map}**

* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)

**Extensions**
* [BaseCache](https://github.com/QSmally/Qulity/blob/master/Documentation/Cache.md)
* [ActiveCache](https://github.com/QSmally/Qulity/blob/master/Documentation/ActiveCache.md)

**Managers**
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/BaseManager.md)
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)

An extended JavaScript Map with additional optimisations, properties and methods.
```js
const Col = new Qulity.Collection(Iterable?);
```

| Key | Type | Description |
| --- | --- | --- |
| iterable? | Array, Object | Optional initial values of this Collection. |



# Values
## [.size](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L22)
> Amount of key/value pairs in this Collection.
>
> Type **{Number}**

# Methods
## [.set(keyContext, value)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L33)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | keyContext | Any | Specifies an address for this value. |
> | value | Any | A value to be inserted at the key of this document. |
>
> Returns **{Collection}** 

## [.delete(keyContext)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L44)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | keyContext | Any | Specifies a key to erase from this Collection. |
>
> Returns **{Collection}** 

## [.get(keyContext)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L54)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | keyContext | Any | Specifies a key to fetch from this Collection. |
>
> Returns **{Any}** If found, the element at the address of the key.

## [.has(keyContext)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L63)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | keyContext | Any | Specifies a key to see if it exists. |
>
> Returns **{Boolean}** A boolean value to indicate whether this element exists.

## [.toArray()](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L74)
> Creates an ordered array of the values of this Collection.
>
> Returns **{Array}** Array of values in this Collection.

## [.toKeyArray()](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L82)
> Creates an ordered array of the keys of this Collection.
>
> Returns **{Array}** Array of keys in this Collection.

## [.toPairObject()](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L90)
> Creates an ordered object of all the entries of this Collection.
>
> Returns **{Object}** Object of the key/value pairs in this Collection.

## [.first(amount?)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L100)
> Obtains the first value(s) from this Collection. Starting from the end if a negative amount is provided.
> | Key | Type | Description |
> | --- | --- | --- |
> | amount? | Number | Amount of values to obtain from the beginning. |
>
> Returns **{Any|Collection}** A single value, or a new Collection of entries if there's an amount provided.

## [.last(amount?)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L118)
> Obtains the last value(s) from this Collection. Starting from the beginning if a negative amount is provided.
> | Key | Type | Description |
> | --- | --- | --- |
> | amount? | Number | Amount of values to obtain from the end. |
>
> Returns **{Any|Collection}** A single value, or a new Collection of entries if there's an amount provided.

## [.find(predicate)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L132)
> Searches for a specific item where the given function returns a truthy value.
> | Key | Type | Description |
> | --- | --- | --- |
> | predicate | Function | Function used to test iterating elements with. |
>
> Returns **{Any}** Returns the value of the element found.

## [.filter(predicate)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L143)
> Identical to `Array.filter()`, but returns a Collection instead of an array.
> | Key | Type | Description |
> | --- | --- | --- |
> | predicate | Function | Function used to test the iterating elements with. |
>
> Returns **{Collection}** Returns the new, filtered Collection.

## [.sweep(predicate)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L155)
> Removes entries that satisfy the provided filter function.
> | Key | Type | Description |
> | --- | --- | --- |
> | predicate | Function | Function used to test the iterating elements with. |
>
> Returns **{Number}** Returns the number of deleted entries.

## [.partition(predicate, lengthExpected?)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L167)
> Partitions the Collection into two (when returning boolean values) or more Collections. If a boolean was given, the first Collection contains the items that passed the test.
> | Key | Type | Description |
> | --- | --- | --- |
> | predicate | Function | Function used to test the iterating elements with. |
> | lengthExpected? | Number | Expected length, and the length of the array of Collections to return. |
>
> Returns **{Array<Collection>}** An array of partitioned Collections.

## [.reduce(transformer, initialAccumulatorContext?)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L193)
> Applies a function to produce a single value.
> | Key | Type | Description |
> | --- | --- | --- |
> | transformer | Function | Function used to reduce, taking three arguments: 'accumulator', 'current value' and 'key'. |
> | initialAccumulatorContext? | Any | A starting value for the accumulator. |
>
> Returns **{Any}** Returns the reduced value.

## [.map(transformer)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L220)
> Maps each item to another value and creates an array out of it.
> | Key | Type | Description |
> | --- | --- | --- |
> | transformer | Function | Function that produces an element of the new array. |
>
> Returns **{Array<Any>}** Returns an array of the mapped values.

## [.exists(predicate)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L239)
> Checks if there is an item that exists that passes a test.
> | Key | Type | Description |
> | --- | --- | --- |
> | predicate | Function | Function used to test iterating elements with. |
>
> Returns **{Boolean}** Returns a boolean based on whether or not an element was found.

## [.someSatisfy(predicate)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L251)
> Checks whether at least one item satisfies the test.
> | Key | Type | Description |
> | --- | --- | --- |
> | predicate | Function | Function used to test iteration elements with. |
>
> Returns **{Boolean}** Returns a boolean based on whether or not some element passed.

## [.every(predicate)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L262)
> Checks whether all the elements in this Collection pass the test.
> | Key | Type | Description |
> | --- | --- | --- |
> | predicate | Function | Function used to test iterating elements with. |
>
> Returns **{Boolean}** Returns a boolean based on whether or not all elements pass the test.

## [.clone()](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L275)
> Provides an identical, deep copy of this Collection.
>
> Returns **{Collection}** 

## [.merge(collections)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L285)
> Merges this Collection with other instances into a new Collection. None of the source Collections will be modified.
> | Key | Type | Description |
> | --- | --- | --- |
> | collections | ...Collection | Collections to merge into one instance. |
>
> Returns **{Collection}** 

## [.implement(collections)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L298)
> Shallowly merges the given Collections into this instance.
> | Key | Type | Description |
> | --- | --- | --- |
> | collections | ...Collection | Collections to merge into this instance. |
>
> Returns **{Collection}** 

## [.intersect(secondary)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L310)
> Returns a new Collection containing items where the keys are present in both original structures.
> | Key | Type | Description |
> | --- | --- | --- |
> | secondary | Collection | A Collection to filter against this instance. |
>
> Returns **{Collection}** 

## [.difference(secondary)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L319)
> Returns a new Collection containing items where the key is present in one of the original structures, but not the other.
> | Key | Type | Description |
> | --- | --- | --- |
> | secondary | Collection | A Collection to filter against this instance. |
>
> Returns **{Collection}** 

## [.tap(indenter)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L331)
> Passes this Collection into a function and returns the Collection itself.
> | Key | Type | Description |
> | --- | --- | --- |
> | indenter | Function | Function used to execute on the Collection. |
>
> Returns **{Collection}** 

## [.each(iterator)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L341)
> Synchronously iterates through this Collection's item and returns itself.
> | Key | Type | Description |
> | --- | --- | --- |
> | iterator | Function | Function to execute on each element. |
>
> Returns **{Collection}** 

## [.sort(orderer)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L352)
> Sorts all the items in this Collection and returns itself.
> | Key | Type | Description |
> | --- | --- | --- |
> | orderer | Function | Function that determines the sort order. |
>
> Returns **{Collection}** 
