
# Manager

* [Start](https://github.com/QSmally/Qulity/blob/master/Documentation/Index.md)
* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/Manager.md)

Manages the API methods of data models and holds its cache.
```js
class MyManager extends Qulity.Manager
```

# Values
> ## Cache [Read Only]
> Cached dataset instances of this Manager.
>
> Type **{DataStore}**

# Methods
> ## add(Id, Model)
> Inserts an instance into this Manager's cache.
> | Key | Type | Description |
> | --- | --- | --- |
> | Id | String | ID string for the data model. |
> | Model | Object, Array, Function, DataModel | Data model to add to this Manager. |
>
> Returns **{BaseManager}** The updated Manager.

> ## remove(Id)
> Removes an instance from this Manager's cache.
> | Key | Type | Description |
> | --- | --- | --- |
> | Id | String | ID string of the instance. |
>
> Returns **{Manager}** The updated Manager.

> ## toObject()
> Serialises this Manager's cache into an object, while still preserving its original data.
>
> Returns **{Object}** The object-form of this Manager's data cache.

> ## resolve(IdOrInstance)
> Resolves an instance of this Manager.
> | Key | Type | Description |
> | --- | --- | --- |
> | IdOrInstance | String, Any | The key of the instance to resolve. |
>
> Returns **{DataModel}** An instance from this Manager.
