
# Collection
### Extends **{Map}**

* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/Manager.md)

**Integrations**
* [Queue](https://github.com/QSmally/Qulity/blob/master/Documentation/Queue.md)

An extended JavaScript Map with additional properties, methods and optimisations.
```js
const Coll = new Qulity.Collection(Iterable?);
```

| Key | Type | Description |
| --- | --- | --- |
| Iterable? | Array, Object | Optional initial values of this Collection. |



# Methods
## [.set(Key, Val)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L23)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | Any | Specifies a key to insert as. |
> | Val | Any | A value to be set under the address. |
>
> Returns **{Collection}** 

## [.delete(Key)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L34)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | Any | Specifies a key to erase from this Collection. |
>
> Returns **{Collection}** 

## [.get(Key)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L44)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | Any | Specifies a key to fetch from this Collection. |
>
> Returns **{Any}** If found, the element from this key.

## [.has(Key)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L53)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | Any | Specifies a key to see if it exists. |
>
> Returns **{Boolean}** A boolean value to indicate whether this element exists.

## [.toArray()](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L65)
> Creates an ordered array of the values of this Collection.
>
> Returns **{Array}** Array of values in this Collection.

## [.toKeyArray()](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L73)
> Creates an ordered array of the keys of this Collection.
>
> Returns **{Array}** Array of keys in this Collection.

## [.toObject()](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L81)
> Creates an ordered object of all the entries of this Collection.
>
> Returns **{Object}** Object of all key/value pairs of this Collection.

## [.first(Amount?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L92)
> Obtains the first value(s) from this Collection. Starting from the end if a negative amount is provided.
> | Key | Type | Description |
> | --- | --- | --- |
> | Amount? | Number | Amount of values to obtain from the beginning. |
>
> Returns **{Any|Array}** A single value, or an array of values if there's an amount provided.

## [.last(Amount?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L113)
> Obtains the last value(s) from this Collection. Starting from the beginning if a negative amount is provided.
> | Key | Type | Description |
> | --- | --- | --- |
> | Amount? | Number | Amount of values to obtain from the end. |
>
> Returns **{Any|Array}** A single value, or an array of values if there's an amount provided.

## [.random(Amount?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L130)
> Obtains unique random value(s) from this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | Amount? | Number | Amount of values to obtain randomly. |
>
> Returns **{Any|Array}** A single value, or an array of values if there's an amount provided.

## [.find(Fn, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L151)
> Searches for a single item where the given function returns a truthy value. This behaves like [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test with. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Any}** Returns the value of the element found.

## [.exists(Fn, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L167)
> Checks if there is an item that exists that passes a test. Identical in behaviour to [Array.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test with. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Boolean}** Boolean to express whether at least one item has passed the test.

## [.every(Fn, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L183)
> Checks if all items pass the test. Identical in behaviour to [Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test with. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Boolean}** Boolean to express whether every item has passed the test.

## [.sweep(Fn, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L202)
> Removes entries that satisfy the provided filter function.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test with. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Number}** Number of removed entries.

## [.filter(Fn, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L218)
> Identical to `Array.filter()`, but returns a Collection instead of an array.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test with. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Collection}** Returns the new filtered Collection.

## [.partition(Fn, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L234)
> Partitions the Collection into two Collections, where the first Collection contains the items that passed and the second contains the items that failed.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to test with. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Array<Collection>}** An array of partitioned Collections.

## [.map(Fn, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L252)
> Maps each item to another value. Identical in behaviour to [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function that produces an element of the new array. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Array}** Returns an array of the mapped values.

## [.reduce(Fn, Init?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L269)
> Applies a function to produce a single value. Identical in behaviour to [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to reduce, taking four arguments; `Accumulator`, `CurVal`, `CurKey` & `this`. |
> | Init? | Any | Starting value for the accumulator. |
>
> Returns **{Any}** 

## [.intersect(Secondary)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L292)
> Returns a new Collection containing items where the keys are present in both original structures.
> | Key | Type | Description |
> | --- | --- | --- |
> | Secondary | Collection | A Collection to filter against. |
>
> Returns **{Collection}** 

## [.difference(Secondary)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L301)
> Returns a new Collection containing items where the key is present in one of the original structures, but not the other.
> | Key | Type | Description |
> | --- | --- | --- |
> | Secondary | Collection | A Collection to filter against. |
>
> Returns **{Collection}** 

## [.clone()](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L311)
> Creates an identical, deep copy of this Collection.
>
> Returns **{Collection}** 

## [.merge(Collections)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L321)
> Combines this Collection with others into a new Collection. None of the source Collections will be modified.
> | Key | Type | Description |
> | --- | --- | --- |
> | Collections | ...Collections | Collections to merge into one. |
>
> Returns **{Collection}** 

## [.implement(Collections)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L336)
> Merges the given Collections into this instance Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | Collections |  ...Collections | Collections to merge into this instance. |
>
> Returns **{Collection}** 

## [.sort(Fn?, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L349)
> Sorts all the elements in the Collection and returns it.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn? | Function | Specifies a function that defines the sort order. If omitted, the Collection is sorted according to each character's Unicode point value, according to the string conversion of each element. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Collection}** 

## [.tap(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L371)
> Passes the Collection's in the function and returns the Collection itself.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function to execute on the Collection. |
>
> Returns **{Collection}** 

## [.each(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L381)
> Iterates on the Collection's items and returns the Collection itself.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function to execute on each element. |
>
> Returns **{Collection}** 
