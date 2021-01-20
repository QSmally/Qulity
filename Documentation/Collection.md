
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

## [.exists(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L213)
> Checks if there is an item that exists that passes a test.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test iterating elements with. |
>
> Returns **{Boolean}** Returns a boolean based on whether or not an element was found.

## [.every(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L228)
> Checks whether all the elements in this Collection pass the test.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test iterating elements with. |
>
> Returns **{Boolean}** Returns a boolean based on whether or not all elements pass the test.

## [.clone()](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L245)
> Provides an identical, deep copy of this Collection.
>
> Returns **{Collection}** 
