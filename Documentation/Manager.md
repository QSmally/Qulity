
# Manager

* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/Manager.md)

**Integrations**
* [Queue](https://github.com/QSmally/Qulity/blob/master/Documentation/Queue.md)

Manages the API methods of data models and holds its cache.
```js
class MyManager extends Qulity.Manager
```

| Key | Type | Description |
| --- | --- | --- |
| Iterable? | Array, Object | Optional initial values of this Manager. |
| Holds? | Function | An optional structure belonging to this Manager. |



# Values
## [.Cache](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Manager.js#L16)
> Cached dataset instances of this Manager. [**Read Only**]
>
> Type **{DataStore}**

# Methods
## [.add(Id, Model)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Manager.js#L46)
> Inserts an instance into this Manager's cache.
> | Key | Type | Description |
> | --- | --- | --- |
> | Id | String | Identifier string for the data model. |
> | Model | Object, Array, Function, DataModel | Data model to add to this Manager. |
>
> Returns **{BaseManager}** The updated Manager instance.

## [.remove(Id)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Manager.js#L61)
> Removes an instance from this Manager's cache.
> | Key | Type | Description |
> | --- | --- | --- |
> | Id | String | ID string of the instance. |
>
> Returns **{Manager}** The updated Manager instance.

## [.toObject()](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Manager.js#L74)
> Serialises this Manager's cache into an object, while still preserving its original data.
>
> Returns **{Object}** The object-form of this Manager's data cache.

## [.resolve(IdOrInstance)](https://github.com/QSmally/Qulity/blob/master/lib/Maps/Manager.js#L85)
> Resolves an instance of this Manager.
> | Key | Type | Description |
> | --- | --- | --- |
> | IdOrInstance | String, Any | The key of the instance to resolve. |
>
> Returns **{DataModel}** An instance from this Manager.
