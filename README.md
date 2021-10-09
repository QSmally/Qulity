
# Qulity

> Qulity is a memory-based utility module which provides you enhanced versions of the native JavaScript Map with additional properties, methods and optimisations.


# Features
* [Collections](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)
* [Managers](https://github.com/QSmally/Qulity/blob/master/Documentation/BaseManager.md)
* [DataStores](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)

## Links
* [Documentations](https://github.com/QSmally/Qulity/blob/master/Documentation/Index.md)
* [Github](https://github.com/QSmally/Qulity)

## Installation
`npm install qulity`
```js
const Qulity = require("qulity");
// ...
```


# Usage

## [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)
An extended JavaScript Map with additional utility methods.
```js
const collection = new Qulity.Collection(iterable?);
```

## [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/BaseManager.md)
Manages the API methods of data models and holds its cache.
```js
const manager = new Qulity.Manager(iterable?, holds?);

manager.add("123456789012345678", new User(...information));
manager.resolve("123456789012345678"); // -> User instance
```


This module is licensed under [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0).
