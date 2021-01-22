
# Collection
### Extends **{Map}**

* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)

An extended JavaScript Map with additional optimisations, properties and methods.
```js
const Col = new Qulity.Collection(Iterable?);
```

| Key | Type | Description |
| --- | --- | --- |
| Iterable? | Array, Object | Optional initial values of this Collection. |



# Values
## [.size](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L23)
> Amount of key/value pairs in this Collection.
>
> Type **{Number}**

# Methods
## [.set(Key, Value)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L33)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | Any | Specifies an address for this value. |
> | Value | Any | A value to be inserted at the key of this document. |
>
> Returns **{Collection}** 

## [.delete(Key)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L44)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | Any | Specifies a key to erase from this Collection. |
>
> Returns **{Collection}** 

## [.get(Key)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L54)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | Any | Specifies a key to fetch from this Collection. |
>
> Returns **{Any}** If found, the element at the address of the key.

## [.has(Key)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L63)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | Any | Specifies a key to see if it exists. |
>
> Returns **{Boolean}** A boolean value to indicate whether this element exists.

## [.toArray()](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L75)
> Creates an ordered array of the values of this Collection.
>
> Returns **{Array}** Array of values in this Collection.

## [.toKeyArray()](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L83)
> Creates an ordered array of the keys of this Collection.
>
> Returns **{Array}** Array of keys in this Collection.

## [.toPairObject()](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L91)
> Creates an ordered object of all the entries of this Collection.
>
> Returns **{Object}** Object of the key/value pairs in this Collection.

## [.first(Amount?)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L102)
> Obtains the first value(s) from this Collection. Starting from the end if a negative amount is provided.
> | Key | Type | Description |
> | --- | --- | --- |
> | Amount? | Number | Amount of values to obtain from the beginning. |
>
> Returns **{Any|Collection}** A single value, or a new Collection of entries if there's an amount provided.

## [.last(Amount?)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L123)
> Obtains the last value(s) from this Collection. Starting from the beginning if a negative amount is provided.
> | Key | Type | Description |
> | --- | --- | --- |
> | Amount? | Number | Amount of values to obtain from the end. |
>
> Returns **{Any|Collection}** A single value, or a new Collection of entries if there's an amount provided.

## [.find(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L141)
> Searches for a specific item where the given function returns a truthy value.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test iterating elements with. |
>
> Returns **{Any}** Returns the value of the element found.

## [.filter(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L156)
> Identical to `Array.filter()`, but returns a Collection instead of an array.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test the iterating elements with. |
>
> Returns **{Collection}** Returns the new, filtered Collection.

## [.sweep(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L171)
> Removes entries that satisfy the provided filter function.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test the iterating elements with. |
>
> Returns **{Number}** Returns the number of deleted entries.

## [.partition(Fn, Length?)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L186)
> Partitions the Collection into two (when returning boolean values) or more Collections. If a boolean was given, the first Collection contains the items that passed the test.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test the iterating elements with. |
> | Length? | Number | Expected length, and the length of the array of Collections to return. |
>
> Returns **{Array<Collection>}** An array of partitioned Collections.

## [.reduce(Fn, Initial?)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L210)
> Applies a function to produce a single value.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to reduce, taking three arguments: 'accumulator', 'current value' and 'key'. |
> | Initial? | Any | A starting value for the accumulator. |
>
> Returns **{Any}** Returns the reduced value.

## [.map(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L237)
> Maps each item to another value and creates an array out of it.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function that produces an element of the new array. |
>
> Returns **{Array<Any>}** Returns an array of the mapped values.

## [.exists(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L255)
> Checks if there is an item that exists that passes a test.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test iterating elements with. |
>
> Returns **{Boolean}** Returns a boolean based on whether or not an element was found.

## [.every(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L279)
> Checks whether all the elements in this Collection pass the test.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test iterating elements with. |
>
> Returns **{Boolean}** Returns a boolean based on whether or not all elements pass the test.

## [.clone()](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L296)
> Provides an identical, deep copy of this Collection.
>
> Returns **{Collection}** 

## [.merge(Collections)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L306)
> Merges this Collection with other instances into a new Collection. None of the source Collections will be modified.
> | Key | Type | Description |
> | --- | --- | --- |
> | Collections | ...Collection | Collections to merge into one instance. |
>
> Returns **{Collection}** 

## [.implement(Collection)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L321)
> Shallowly merges the given Collections into this instance.
> | Key | Type | Description |
> | --- | --- | --- |
> | Collection |  ...Collection | Collections to merge into this instance. |
>
> Returns **{Collection}** 

## [.intersect(Secondary)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L334)
> Returns a new Collection containing items where the keys are present in both original structures.
> | Key | Type | Description |
> | --- | --- | --- |
> | Secondary | Collection | A Collection to filter against this instance. |
>
> Returns **{Collection}** 

## [.difference(Secondary)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L343)
> Returns a new Collection containing items where the key is present in one of the original structures, but not the other.
> | Key | Type | Description |
> | --- | --- | --- |
> | Secondary | Collection | A Collection to filter against this instance. |
>
> Returns **{Collection}** 

## [.tap(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L353)
> Passes this Collection into a function and returns the Collection itself.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to execute on the Collection. |
>
> Returns **{Collection}** 

## [.each(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L363)
> Synchronously iterates through this Collection's item and returns itself.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function to execute on each element. |
>
> Returns **{Collection}** 

## [.sort(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L374)
> Sorts all the items in this Collection and returns itself.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function that determines the sort order. |
>
> Returns **{Collection}** 
