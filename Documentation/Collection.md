
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

## [.first(Amount?)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L94)
> Obtains the first value(s) from this Collection. Starting from the end if a negative amount is provided.
> | Key | Type | Description |
> | --- | --- | --- |
> | Amount? | Number | Amount of values to obtain from the beginning. |
>
> Returns **{Any|Collection}** A single value, or a new Collection of entries if there's an amount provided.

## [.last(Amount?)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L115)
> Obtains the last value(s) from this Collection. Starting from the beginning if a negative amount is provided.
> | Key | Type | Description |
> | --- | --- | --- |
> | Amount? | Number | Amount of values to obtain from the end. |
>
> Returns **{Any|Collection}** A single value, or a new Collection of entries if there's an amount provided.

## [.find(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L133)
> Searches for a specific item where the given function returns a truthy value.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test iterating elements with. |
>
> Returns **{Any}** Returns the value of the element found.

## [.exists(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L148)
> Checks if there is an item that exists that passes a test.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test iterating elements with. |
>
> Returns **{Boolean}** Returns a boolean based on whether or not an element was found.

## [.every(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Base/Collection.js#L163)
> Checks whether all the elements in this Collection pass the test.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test iterating elements with. |
>
> Returns **{Boolean}** Returns a boolean based on whether or not all elements pass the test.
