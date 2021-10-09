
# Cache
### Extends **{Collection}**

* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)

**Extensions**
* [BaseCache](https://github.com/QSmally/Qulity/blob/master/Documentation/Cache.md)
* [ActiveCache](https://github.com/QSmally/Qulity/blob/master/Documentation/ActiveCache.md)

**Managers**
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/BaseManager.md)
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)

Base class that manages additional utility functions and other features.
```js
const CC = new Qulity.Cache(Iterable?);
```

| Key | Type | Description |
| --- | --- | --- |
| iterable? | Array, Object | Optional initial values of this Cache. |



# Methods
## [.default(keyContext, value)](https://github.com/QSmally/Qulity/blob/master/lib/Extensions/Cache.js#L18)
> Ensures an entry being in this Cache map.
> | Key | Type | Description |
> | --- | --- | --- |
> | keyContext | Any | Specifies the address for the value. |
> | value | Any | A value to be conditionally inserted. |
>
> Returns **{Boolean}** Whether or not a new value was inserted.
