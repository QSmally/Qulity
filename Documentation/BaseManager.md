
# BaseManager

* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)

**Extensions**
* [BaseCache](https://github.com/QSmally/Qulity/blob/master/Documentation/Cache.md)
* [ActiveCache](https://github.com/QSmally/Qulity/blob/master/Documentation/ActiveCache.md)

**Managers**
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/BaseManager.md)
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)

Manages the API methods of data models and holds its cache.
```js
class MyManager extends Qulity.Manager
```

| Key | Type | Description |
| --- | --- | --- |
| iterable? | Array, Object | Optional initial values of this Manager. |
| holds? | Function | An optional data stricture belonging to this Manager. @implements Collection |



# Values
## [.cache](https://github.com/QSmally/Qulity/blob/master/lib/Managers/BaseManager.js#L17)
> Cached dataset entries of this Manager. [**Read Only**]
>
> Type **{Collection}**

## [.holds](https://github.com/QSmally/Qulity/blob/master/lib/Managers/BaseManager.js#L31)
> A structure belonging to this Manager. [**Read Only**]
>
> Type **{Function?}**

# Methods
## [.add(identifier, model)](https://github.com/QSmally/Qulity/blob/master/lib/Managers/BaseManager.js#L40)
> Inserts an instance into this Manager's cache.
> | Key | Type | Description |
> | --- | --- | --- |
> | identifier | String | Identifier string for the address of this model. |
> | model | Function, Any | A data model to add to this Manager. |
>
> Returns **{Manager}** 

## [.remove(identifier)](https://github.com/QSmally/Qulity/blob/master/lib/Managers/BaseManager.js#L55)
> Removes an instance from this Manager's cache.
> | Key | Type | Description |
> | --- | --- | --- |
> | identifier | String | Identifier string of the instance. |
>
> Returns **{Manager}** 

## [.resolve(idOrInstance)](https://github.com/QSmally/Qulity/blob/master/lib/Managers/BaseManager.js#L68)
> Resolves an instance of this Manager.
> | Key | Type | Description |
> | --- | --- | --- |
> | idOrInstance | String, Function, Any | Identifier to resolve from this Manager. |
>
> Returns **{Function|Any}** A data model resolved from this Manager's cache.
