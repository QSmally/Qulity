
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
