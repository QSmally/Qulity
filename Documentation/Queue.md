
# Queue

* [Start](https://github.com/QSmally/Qulity/blob/master/Documentation/Index.md)
* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/Manager.md)
* [Queue](https://github.com/QSmally/Qulity/blob/master/Documentation/Queue.md)

A manager for ordening values and iterating over them.
```js
const Queue = new Qulity.Queue(Iterable?);
```

| Key | Type | Description |
| --- | --- | --- |
| Iterable? | Array | Initial values of this Queue. |



# Values
## [.Values](https://github.com/QSmally/Qulity/blob/master/lib/Integrations/Queue.js#L15)
> Main structure holding the Queue values. [**Read Only**]
>
> Type **{Array}**

## [.size](https://github.com/QSmally/Qulity/blob/master/lib/Integrations/Queue.js#L29)
> Current waiting size of the Queue. [**Read Only**]
>
> Type **{Number}**

# Methods
## [.add(Val, Priority?)](https://github.com/QSmally/Qulity/blob/master/lib/Integrations/Queue.js#L39)
> Adds a new entry to the end of this Queue.
> | Key | Type | Description |
> | --- | --- | --- |
> | Val | Any | Value to be added to the Queue. |
> | Priority? | Boolean | Whether this item should be put at the start of the Queue. |
>
> Returns **{Number}** New size of this Queue, the waiting size.

## [.remove(Idx, IdxOrFn)](https://github.com/QSmally/Qulity/blob/master/lib/Integrations/Queue.js#L52)
> Removes an element from the Queue.
> | Key | Type | Description |
> | --- | --- | --- |
> | Idx | Number | Index of the entry to remove. |
> | IdxOrFn | Number, Function | Index of the entry, or a function to compare with. |
>
> Returns **{Number}** New size of this Queue.

## [.next()](https://github.com/QSmally/Qulity/blob/master/lib/Integrations/Queue.js#L81)
> Fetches the current value in the Queue and removes it.
>
> Returns **{Any}** 

## [.iterate(fn, Iterable?)](https://github.com/QSmally/Qulity/blob/master/lib/Integrations/Queue.js#L91)
> Iterates over this Queue. Note - This function removes all the items from the Queue after iterating.
> | Key | Type | Description |
> | --- | --- | --- |
> | fn | Function | Function to execute per entry on this Queue. |
> | Iterable? | Object, Array | Optional initial values for the cache of this iterate. |
>
> Returns **{DataStore|Queue}** When an iterable is passed, a DataStore, otherwise this Queue.
