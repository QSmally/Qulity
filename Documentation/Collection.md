
# Collection
### Extends **{Map}**

* [Start](https://github.com/QSmally/Qulity/blob/master/Documentation/Index.md)
* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/Manager.md)
* [Queue](https://github.com/QSmally/Qulity/blob/master/Documentation/Queue.md)

An extended JavaScript Map with additional utility methods.
```js
const Coll = new Qulity.Collection(Iterable?);
```

| Key | Type | Description |
| --- | --- | --- |
| Iterable? | Array, Object | Optional initial values of this Collection. |



# Methods
## [.set(Key, Val)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L27)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | Any | Specifies a key to insert as. |
> | Val | Any | A value to be set under the address. |
>
> Returns **{Collection}** 

## [.get(Key)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L38)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | Any | Specifies a key to fetch from this Collection. |
>
> Returns **{Any}** Element if found.

## [.delete(Key)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L47)
> Main interaction point of this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | Any | Specifies a key to erase from this Collection. |
>
> Returns **{Collection}** 

## [.toArray()](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L60)
> Creates an ordered array of the values of this Collection.
>
> Returns **{Array}** Array of values in this Collection.

## [.toKeyArray()](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L68)
> Creates an ordered array of the keys of this Collection.
>
> Returns **{Array}** Array of keys in this Collection.

## [.toObject()](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L76)
> Creates an ordered object of all the entries of this Collection.
>
> Returns **{Object}** Object of all key/value pairs of this Collection.

## [.first(Amount?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L89)
> Obtains the first value(s) from this Collection. Starting from the end if a negative amount is provided.
> | Key | Type | Description |
> | --- | --- | --- |
> | Amount? | Number | Amount of values to obtain from the beginning. |
>
> Returns **{Any|Array}** A single value, or an array of values if there's an amount provided.

## [.last(Amount?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L110)
> Obtains the last value(s) from this Collection. Starting from the beginning if a negative amount is provided.
> | Key | Type | Description |
> | --- | --- | --- |
> | Amount? | Number | Amount of values to obtain from the end. |
>
> Returns **{Any|Array}** A single value, or an array of values if there's an amount provided.

## [.random(Amount?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L127)
> Obtains unique random value(s) from this Collection.
> | Key | Type | Description |
> | --- | --- | --- |
> | Amount? | Number | Amount of values to obtain randomly. |
>
> Returns **{Any|Array}** A single value, or an array of values if there's an amount provided.

## [.find(cfn, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L148)
> Searches for a single item where the given function returns a truthy value. This behaves like [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
> | Key | Type | Description |
> | --- | --- | --- |
> | cfn | Function | Function used to test with. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Any}** Returns the value of the element found.

## [.sweep(Cfn, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L165)
> Removes entries that satisfy the provided filter function.
> | Key | Type | Description |
> | --- | --- | --- |
> | Cfn | Function | Function used to test with. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Number}** Number of removed entries.

## [.filter(Cfn, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L182)
> Identical to `Array.filter()`, but returns a Collection instead of an array.
> | Key | Type | Description |
> | --- | --- | --- |
> | Cfn | Function | Function used to test with. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Collection}** Returns the new filtered Collection.

## [.partition(Cfn, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L199)
> Partitions the Collection into two Collections, where the first Collection contains the items that passed and the second contains the items that failed.
> | Key | Type | Description |
> | --- | --- | --- |
> | Cfn | Function | Function used to test with. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Array<Collection>}** An array of partitioned Collections.

## [.map(Fn, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L218)
> Maps each item to another value. Identical in behaviour to [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function that produces an element of the new array. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Array}** Returns an array of the mapped values.

## [.exists(Cfn, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L233)
> Checks if there is an item that exists that passes a test. Identical in behaviour to [Array.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).
> | Key | Type | Description |
> | --- | --- | --- |
> | Cfn | Function | Function used to test with. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Boolean}** Boolean to express whether at least one item has passed the test.

## [.every(Cfn, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L250)
> Checks if all items pass the test. Identical in behaviour to [Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).
> | Key | Type | Description |
> | --- | --- | --- |
> | Cfn | Function | Function used to test with. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Boolean}** Boolean to express whether every item has passed the test.

## [.reduce(Fn, Init?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L267)
> Applies a function to produce a single value. Identical in behaviour to [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function used to reduce, taking four arguments; `Accumulator`, `CurVal`, `CurKey` & `this`. |
> | Init? | Any | Starting value for the accumulator. |
>
> Returns **{Any}** 

## [.intersect(Second)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L295)
> Returns a new Collection containing items where the keys are present in both original structures.
> | Key | Type | Description |
> | --- | --- | --- |
> | Second | Collection | A Collection to filter against. |
>
> Returns **{Collection}** 

## [.difference(Second)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L304)
> Returns a new Collection containing items where the key is present in one of the original structures, but not the other.
> | Key | Type | Description |
> | --- | --- | --- |
> | Second | Collection | A Collection to filter against. |
>
> Returns **{Collection}** 

## [.tap(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L314)
> Passes the Collection's in the function and returns the Collection itself.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function to execute on the Collection. |
>
> Returns **{Collection}** 

## [.each(Fn)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L324)
> Iterates on the Collection's items and returns the Collection itself.
> | Key | Type | Description |
> | --- | --- | --- |
> | Fn | Function | Function to execute on each element. |
>
> Returns **{Collection}** 

## [.clone()](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L338)
> Creates an identical, shallow copy of this Collection.
>
> Returns **{Collection}** 

## [.merge(Collections)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L346)
> Combines this Collection with others into a new Collection. None of the source Collections will be modified.
> | Key | Type | Description |
> | --- | --- | --- |
> | Collections | ...Collections | Collections to merge into one. |
>
> Returns **{Collection}** 

## [.sort(Cfn?, This?)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Collection.js#L361)
> Sorts all the elements in the Collection and returns it.
> | Key | Type | Description |
> | --- | --- | --- |
> | Cfn? | Function | Specifies a function that defines the sort order. If omitted, the Collection is sorted according to each character's Unicode point value, according to the string conversion of each element. |
> | This? | Any | Value to use as `this` when executing functions. |
>
> Returns **{Collection}** 
