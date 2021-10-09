
# DataStore
### Extends **{Collection}**

* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)

**Extensions**
* [BaseCache](https://github.com/QSmally/Qulity/blob/master/Documentation/Cache.md)
* [ActiveCache](https://github.com/QSmally/Qulity/blob/master/Documentation/ActiveCache.md)

**Managers**
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/BaseManager.md)
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)

Base class that manages the creation, retrieval and deletion of a specific data model.
```js
const DS = new Qulity.DataStore(Iterable?);
```

| Key | Type | Description |
| --- | --- | --- |
| iterable? | Array, Object | Optional initial values of this DataStore. |



# Methods
## [.set(keyContext, model)](https://github.com/QSmally/Qulity/blob/master/lib/Managers/DataStore.js#L23)
> Inserts or updates a model.
> | Key | Type | Description |
> | --- | --- | --- |
> | keyContext | String, Number | Key of the model to be inserted. |
> | model | Function, Object, DataModel | The data model to set into the DataStore. |
>
> Returns **{DataStore}** 

## [.resolve(keyContext)](https://github.com/QSmally/Qulity/blob/master/lib/Managers/DataStore.js#L35)
> Resolves a data model.
> | Key | Type | Description |
> | --- | --- | --- |
> | keyContext | String, Number | Key of the model to be resolved. |
>
> Returns **{DataModel}** Model that got resolved or cached.

# Typedefs
## [DataModel](https://github.com/QSmally/Qulity/blob/master/lib/Managers/DataStore.js#L18)
> An entry of this DataStore.
>
> Type **{Function|Object}**
