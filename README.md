
# Qulity
## A data management utility

[[Contribute](#issues-contributing--license)] [[Documentation](https://github.com/QSmally/Qulity/blob/master/Documentation/Index.md)]

> Qulity is a memory-based utility module which provides you enhanced versions of the native JavaScript Map with additional methods, properties and optimisations.


# Main Features
* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md), an enhanced Map class.
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md), an optimised dictionary.
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/Manager.md), integrated instance manager.
* [Queue](https://github.com/QSmally/Qulity/blob/master/Documentation/Queue.md), an element ordening integration.

## Links
* [Documentations](https://github.com/QSmally/Qulity/blob/master/Documentation/Index.md)
* [Github](https://github.com/QSmally/Qulity)
* [Discord Server](https://qdb.qbot.eu/discord)

## Install/Import
`npm install qulity`
```js
const Qulity = require("qulity");
// ...
```


# Usage

## [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md)
An extended JavaScript Map with additional utility methods.
```js
const Collection = new Qulity.Collection(Iterable?);
```

## [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md)
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

## [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/Manager.md)
Manages the API methods of data models and holds its cache.
```js
// Create an instance from the Manager.
class UserManager extends Qulity.Manager {
    constructor (Client, ...Options) {
        super(...Options);
        this.Client = Client;
    }

    get Admins () { return this.Cache.filter(User => User.Admin); }

    Ban (UserId)  {
        const User = this.Cache.resolve(UserId);
        if (User && !User.Admin) User.Ban();
    }
}

const Users = new UserManager(Client, GuildUsers, User);
Users.Client; // Access your own variables in the Manager.
Users.Admins; // Automatically get all administrators.
Users.Cache;  // All 'Users' as DataStore.

// Access methods within the Manager.
Users.Ban("d34hg3o");
```

## [Queue](https://github.com/QSmally/Qulity/blob/master/Documentation/Queue.md)
A manager for ordening values and iterating over them.
```js
const Queue = new QDB.Queue(PartialShardCache);

// Iterate over the Queue items.
const Shards = Queue.iterate(async (Shard, Cache) => {
    const {Token} = Cache.resolve(Shard.Id);
    // Log into the shard and caches it.
    await Shard.Login(Token);
    Cache.set(Shard.Id, Shard);
}, PartialShardCache);
```

# Issues, Contributing & License
If you've found a bug or want to suggest a feature, please ensure that it hasn't already been reported/suggested - Then, feel free to create an [issue](https://github.com/QSmally/Qulity/issues)! If you'd like to contribute to the project, feel free to fork [the repository](https://github.com/QSmally/Qulity) and create a pull request.

This module is licensed under [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0).
