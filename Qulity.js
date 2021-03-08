
/*
    Qulity is built from the ground up by QSmally.
    Qulity © 2021 by QSmally, all rights reserved.
    Please report bugs by creating an issue on the repo.

    Originally included in project QSmally/QDB.

    Obviously the Node runtime is not created by myself,
    it's created by their respective owners.
    All rights are reserved.
*/


module.exports = {

    // Base
    Collection: require("./lib/Base/Collection"),

    // Extensions
    Cache:       require("./lib/Extensions/Cache"),
    ActiveCache: require("./lib/Extensions/ActiveCache"),

    // Managers
    Manager:   require("./lib/Managers/BaseManager"),
    DataStore: require("./lib/Managers/DataStore")

};
