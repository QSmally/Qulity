
# ActiveCache
### Extends **{EventEmitter}**

* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)

**Extensions**
* [BaseCache](https://github.com/QSmally/Qulity/blob/master/Documentation/Cache.md)
* [ActiveCache](https://github.com/QSmally/Qulity/blob/master/Documentation/ActiveCache.md)

**Managers**
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/BaseManager.md)
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)

Extended class that implements an events driver.
```js
const AC = new Qulity.ActiveCache(Iterable?);
```

| Key | Type | Description |
| --- | --- | --- |
| Iterable? | Array, Object | Optional initial values of this Cache. |



# Methods
## [.on(Event, Handler)](https://github.com/QSmally/Qulity/blob/master/lib/Extensions/ActiveCache.js#L35)
> Registers a handler for this ActiveCache.
> | Key | Type | Description |
> | --- | --- | --- |
> | Event | Event | An event to handle. |
> | Handler | Function | A handler for this registered event. |
>
> Returns **{ActiveCache}** 

# Typedefs
## [Event](https://github.com/QSmally/Qulity/blob/master/lib/Extensions/ActiveCache.js#L64)
> Current types of events. 
> | Key | Type | Description |
> | --- | --- | --- |
> | set | String |  |
> | delete | String |  |
>
> Type **{String}**
