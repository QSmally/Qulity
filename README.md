
# Qulity
## A data management utility

[[Contribute](#issues-contributing--license)] [[Documentation](https://github.com/QSmally/Qulity/blob/master/Documentation/Index.md)]

> Qulity is a memory-based utility module which provides you enhanced versions of the native JavaScript Map with additional properties, methods and optimisations.


# Main Features
* [Collections](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)
* [Data Managers](https://github.com/QSmally/Qulity/blob/v1/Documentation/BaseManager.md)

## Links
* [Documentations](https://github.com/QSmally/Qulity/blob/master/Documentation/Index.md)
* [Github](https://github.com/QSmally/Qulity)

## Install/Import
`npm install qulity`
```js
const Qulity = require("qulity");
// ...
```


# Usage

## [Collection](https://github.com/QSmally/Qulity/blob/v1/Documentation/Collection.md)
An extended JavaScript Map with additional utility methods.
```js
const Collection = new Qulity.Collection(Iterable?);
```

## [Manager](https://github.com/QSmally/Qulity/blob/v1/Documentation/BaseManager.md)
Manages the API methods of data models and holds its cache.
```js
const Manager = new Qulity.Manager(Iterable?, Holds?);

Manager.add("123456789012345678", new User(...Information));
Manager.resolve("123456789012345678"); // -> User instance
```

# Issues, Contributing & License
Before making an issue for a bug or feature submittion, please ensure that it hasn't already been created [on the repository](https://github.com/QSmally/Qulity/issues).

This module is licensed under [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0).
