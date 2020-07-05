
# Qulity
## A data management utility

**Qulity is, while stable, still heavily under development.** [Contribute](#issues,-contributing-&-license)

> Qulity is a utility module which provides you enhanced versions of the native JavaScript Map & other classes with additional methods and optimisations.


# Main Features
* [Collection](https://qdb.qbot.eu/documentations/qulity/collection), an enhanced Map class.
* [DataStore](https://qdb.qbot.eu/documentations/qulity/datastore), an optimised dictionary.

## Links
* [Website](https://qdb.qbot.eu/)
* [Documentations](https://qdb.qbot.eu/documentations/qulity)
* [Github](https://github.com/QSmally/Qulity)
* [Discord Server](https://qdb.qbot.eu/discord)

## Install/Import
`npm install qulity`
```js
const Qulity = require("qulity");
// ...
```


# Usage

## [Collection](https://qdb.qbot.eu/documentations/qulity/collection)
An extended JavaScript Map with additional utility methods.
```js
const Collection = new Qulity.Collection(Iterable?);
```

## [DataStore](https://qdb.qbot.eu/documentations/qulity/datastore)
Base class that manages the creation, retrieval and deletion of a specific data model.
```js
const DataStore = new Qulity.DataStore(Iterable?);

// Set a data model into the DataStore.
DataStore.set("b0ce7d", {
    Name: "Smally",
    Job:  "Software Engineer"
});

// Resolve a data model to be used.
const Model = DataStore.resolve("b0ce7d");

// Last Recently Resolved model gets cached.
// Or resolve a model and, if the cached model is
// the one you requested, that gets returned.
DataStore.LRR;
```

# Issues, Contributing & License
If you've found a bug or want to suggest a feature, please ensure that it hasn't already been reported/suggested - Then, feel free to create an issue! If you'd like to contribute to the project, feel free to fork [the repository](https://github.com/QSmally/Qulity) and create a pull request.

This module is licensed under [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0).
