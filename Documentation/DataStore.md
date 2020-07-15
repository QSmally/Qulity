
# DataStore
### Extends **{Collection}**

* [Start](https://github.com/QSmally/Qulity/blob/master/Documentation/Index.md)
* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/Manager.md)

Base class that manages the creation, retrieval and deletion of a specific data model.
```js
const MyDS = new Qulity.DataStore(Iterable?);
```

# Values
> ## LRR [Read Only]
> Last Recently Resolved - Caches the last data model that got resolved.
>
> Type **{DataModel}**

# Methods
> ## set(Key, Model)
> Sets a model into the DataStore.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | String, Number | Key of the model to be inserted. |
> | Model | Object, Array, Function, DataModel | The data model to set into the DataStore. |
>
> Returns **{DataStore}** The updated DataStore.

> ## delete(Key)
> Deletes a model from the DataStore.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | String, Number | Key of the model to be erased. |
>
> Returns **{DataStore}** The updated DataStore.

> ## resolve(Key)
> Resolves a data model.
> | Key | Type | Description |
> | --- | --- | --- |
> | Key | String, Number | Key of the model to be resolved. |
>
> Returns **{DataModel}** Model that got resolved or cached.
