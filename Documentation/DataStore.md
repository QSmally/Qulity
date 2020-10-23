
# DataStore
### Extends **{Collection}**

* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/Manager.md)

**Integrations**
* [Queue](https://github.com/QSmally/Qulity/blob/master/Documentation/Queue.md)

Base class that manages the creation, retrieval and deletion of a specific data model.
```js
const MyDS = new Qulity.DataStore(Iterable?);
```

| Key | Type | Description |
| --- | --- | --- |
| Iterable? | Array, Object | Optional initial values of this DataStore. |

DataStore's are not designed to contain data that changes a lot through utility functions, rather to contain dictionary-like entries that should be fetched quickly.



# Values
## [.LRR](https://github.com/QSmally/Qulity/blob/master/lib/Maps/DataStore.js#L18)
> Last Recently Resolved - Caches the last data model that got resolved. [**Read Only**]
>
> Type **{DataModel}**

# Methods
## [.set(Key, Model)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/DataStore.js#L37)
> Sets a model into the DataStore.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | String, Number | Key of the model to be inserted. |
> | Model | Object, Array, Function, DataModel | The data model to set into the DataStore. |
>
> Returns **{DataStore}** The updated DataStore.

## [.delete(Key)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/DataStore.js#L52)
> Deletes a model from the DataStore.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | String, Number | Key of the model to be erased. |
>
> Returns **{DataStore}** The updated DataStore.

## [.resolve(Key)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/DataStore.js#L63)
> Resolves a data model.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | String, Number | Key of the model to be resolved. |
>
> Returns **{DataModel}** Model that got resolved or cached.
