
# DataStore
### Extends **{Collection}**

* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)

**Managers**
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/BaseManager.md)
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)

Base class that manages the creation, retrieval and deletion of a specific data model.
```js
const DS = new Qulity.DataStore(Iterable?);
```

| Key | Type | Description |
| --- | --- | --- |
| Iterable? | Array, Object | Optional initial values of this DataStore. |



# Methods
## [.set(Key, Model)](https://github.com/QSmally/Qulity/blob/master/lib/Managers/DataStore.js#L25)
> Sets a model into the DataStore.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | String, Number | Key of the model to be inserted. |
> | Model | Function, Object, DataModel | The data model to set into the DataStore. |
>
> Returns **{DataStore}** 

## [.resolve(Key)](https://github.com/QSmally/Qulity/blob/master/lib/Managers/DataStore.js#L37)
> Resolves a data model.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | String, Number | Key of the model to be resolved. |
>
> Returns **{DataModel}** Model that got resolved or cached.

# Typedefs
## [DataModel](https://github.com/QSmally/Qulity/blob/master/lib/Managers/DataStore.js#L53)
> An entry of this DataStore.
>
> Type **{Function|Object}**
