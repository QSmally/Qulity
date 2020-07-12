
# Qulity
## A data management utility

**Qulity is, while stable, still heavily under development.** There are loads more features to be added! [[Contribute](#issues-contributing--license)] [[Documentation](https://github.com/QSmally/Qulity/blob/master/Documentation/Index.md)]

> Qulity is a utility module which provides you enhanced versions of the native JavaScript Map & other classes with additional methods and optimisations.


# Main Features
* [Collection](https://github.com/QSmally/Qulity/blob/master/Documentation/Collection.md), an enhanced Map class.
* [DataStore](https://github.com/QSmally/Qulity/blob/master/Documentation/DataStore.md), an optimised dictionary.
* [Manager](https://github.com/QSmally/Qulity/blob/master/Documentation/Manager.md), integrated instance manager.

## Links
* [Website](https://qdb.qbot.eu/) (Not updated for Qulity)
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
// Create an instance from a Manager.
class UserManager extends Qulity.Manager {
    constructor (Client, ...Options) {
        super(...Options);
        this.Client = Client;
    }

    get Admins () { return this.Cache.filter(User => User.Admin); }

    Ban (UserId)  {
        const User = this.Cache.resolve(UserId);
        if (User && !User.Admin) User.Ban(); // Custom from User instance.
    }
}

const Users = new UserManager(Client, GuildUsers, User);
Users.Client; // Access your own variables in the Manager.
Users.Cache;  // All 'Users' as DataStore.
Users.Admins; // Automatically get all administrators.

// Access methods within the Manager.
Users.Ban("d34hg3o");
```

# Issues, Contributing & License
If you've found a bug or want to suggest a feature, please ensure that it hasn't already been reported/suggested - Then, feel free to create an [issue](https://github.com/QSmally/Qulity/issues)! If you'd like to contribute to the project, feel free to fork [the repository](https://github.com/QSmally/Qulity) and create a pull request.

This module is licensed under [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0).
