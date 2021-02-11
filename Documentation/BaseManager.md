
# BaseManager

* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)

**Extensions**
* [BaseCache](https://github.com/QSmally/Qulity/blob/master/Documentation/Cache.md)

**Managers**
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/BaseManager.md)
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)

Manages the API methods of data models and holds its cache.
```js
class MyManager extends Qulity.Manager
```

| Key | Type | Description |
| --- | --- | --- |
| Iterable? | Array, Object | Optional initial values of this Manager. |
| Holds? | Function | An optional data stricture belonging to this Manager. |



# Values
## [.cache](https://github.com/QSmally/Qulity/blob/master/lib/Managers/BaseManager.js#L16)
> Cached dataset entries of this Manager. [**Read Only**]
>
> Type **{Collection}**

## [.holds](https://github.com/QSmally/Qulity/blob/master/lib/Managers/BaseManager.js#L31)
> A structure belonging to this Manager. [**Read Only**]
>
> Type **{Function?}**

# Methods
## [.add(Id, Model)](https://github.com/QSmally/Qulity/blob/master/lib/Managers/BaseManager.js#L45)
> Inserts an instance into this Manager's cache.
> | Key | Type | Description |
> | --- | --- | --- |
> | Id | String | Identifier string for the address of this model. |
> | Model | Function, Any | A data model to add to this Manager. |
>
> Returns **{Manager}** 

## [.remove(Id)](https://github.com/QSmally/Qulity/blob/master/lib/Managers/BaseManager.js#L60)
> Removes an instance from this Manager's cache.
> | Key | Type | Description |
> | --- | --- | --- |
> | Id | String | Identifier string of the instance. |
>
> Returns **{Manager}** 

## [.resolve(IdOrInstance)](https://github.com/QSmally/Qulity/blob/master/lib/Managers/BaseManager.js#L73)
> Resolves an instance of this Manager.
> | Key | Type | Description |
> | --- | --- | --- |
> | IdOrInstance | String, Function, Any | Identifier to resolve from this Manager. |
>
> Returns **{Function|Any}** A data model resolved from this Manager's cache.
