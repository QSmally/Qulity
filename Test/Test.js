
module.exports = (Qulity, Tap) => {

    // Collection
    const Col = new Qulity.Collection();

    Col.set("foo", "bar");
    Col.set("bar", "roo");
    Col.set("roo", "doo");
    Col.set("doo", "bar");

    Tap("Collection get", Col.get("foo"), "bar");

    Tap("Collection size", Col.size, 4);
    Tap("Collection delete", Col.delete("foo").size, 3);
    Tap("Collection delete 2", Col.delete("bar").size, 2);

    Tap("Collection get 2", Col.get("foo"), undefined);
    Tap("Collection toArray", Col.toArray(), ["doo", "bar"]);

    Tap("Collection set", Col.set("foo", "new").size, 3);
    Tap("Collection has", Col.has("bar"), false);
    Tap("Collection has 2", Col.has("foo"), true);

    Tap("Collection get 2", Col.get("foo"), "new");
    Tap("Collection toArray", Col.toArray(), ["doo", "bar", "new"]);

    Tap("Collection first", Col.first(), "doo");
    Tap("Collection last", Col.last(), "new");

    Tap("Collection first 2", Col.first(2).toArray(), ["doo", "bar"]);
    Tap("Collection first 3", Col.first(3).toArray(), ["doo", "bar", "new"]);
    Tap("Collection first 4", Col.first(4).toArray(), ["doo", "bar", "new"]);

    Tap("Collection last 2", Col.last(2).toArray(), ["new", "bar"]);
    Tap("Collection last 3", Col.last(3).toArray(), ["new", "bar", "doo"]);
    Tap("Collection last 4", Col.last(4).toArray(), ["new", "bar", "doo"]);

    Tap("Collection find", Col.find(V => V === "bar"), "bar");
    Tap("Collection find 2", Col.find((_, K) => K === "roo"), "doo");
    Tap("Collection find 3", Col.find(V => V === "none"), undefined);

    Tap("Collection filter", Col.filter(V => V === "bar").toArray(), ["bar"]);
    Tap("Collection filter 2", Col.filter((_, K) => K !== "roo").toArray(), ["bar", "new"]);
    Tap("Collection filter 3", Col.filter(V => V === "none").toArray(), []);

    const Col2 = Col.clone();

    Tap("Collection clone", Col.size === Col2.size, true);
    Tap("Collection clone 2", Col2.toArray(), ["doo", "bar", "new"]);

    Tap("Collection sweep", Col2.sweep(V => V === "bar"), 1);
    Tap("Collection sweep 2", Col2.toArray(), ["doo", "new"]);
    Tap("Collection sweep 3", Col2.sweep((_, K) => K !== "roo"), 1);
    Tap("Collection sweep 4", Col2.toArray(), ["doo"]);
    Tap("Collection sweep 5", Col2.sweep(V => V === "none"), 0);
    Tap("Collection sweep 6", Col2.toArray(), ["doo"]);
    
    Tap("Collection partition", Col.partition(V => V === "bar").map(C => C.toArray()), [["bar"], ["doo", "new"]]);
    Tap("Collection partition 2", Col.partition((_, K) => K !== "roo").map(C => C.toArray()), [["bar", "new"], ["doo"]]);
    Tap("Collection partition 3", Col.partition(V => V === "none").map(C => C.toArray()), [[], ["doo", "bar", "new"]]);
    Tap("Collection partition 4", Col.partition(V => V === "none", 4).map(C => C.toArray()), [[], ["doo", "bar", "new"], [], []]);
    Tap("Collection partition 5", Col.partition(_ => 2, 4).map(C => C.toArray()), [[], [], ["doo", "bar", "new"], []]);
    Tap("Collection partition 6", Col.partition(_ => 2, 4).length, 4);

    Tap("Collection reduce", Col.reduce((A, V, K) => { A.push([K, V]); return A; }, []), [["roo", "doo"], ["doo", "bar"], ["foo", "new"]]);
    Tap("Collection reduce 2", Col.reduce((A, V) => A + V), "doobarnew");

    Tap("Collection map", Col.map(V => V + " was here!"), ["doo was here!", "bar was here!", "new was here!"]);
    Tap("Collection map 2", Col.map((V, K) => `${K}: ${V}`), ["roo: doo", "doo: bar", "foo: new"]);

    Tap("Collection exists", Col.exists(V => V === "bar"), true);
    Tap("Collection exists 2", Col.exists((_, K) => K === "foo"), true);
    Tap("Collection exists 3", Col.exists(V => V === "none"), false);

    Tap("Collection some", Col.some(Item => Item.startsWith("b")), true);
    Tap("Collection some 2", Col.some(Item => Item === "doo"), true);
    Tap("Collection some 3", Col.some(Item => Item.length === 4), false);

    Tap("Collection every", Col.every(Item => Item.length === 3), true);
    Tap("Collection every 2", Col.every(Item => Item.length === 4), false);
    Tap("Collection every 3", Col.every(Item => Item === "doo"), false);

    const Col3 = new Qulity.Collection({
        new: "loo",
        loo: "roo"
    });

    Tap("Collection merge", Col.merge(Col3).toPairObject(), {
        roo: "doo",
        doo: "bar",
        foo: "new",
        new: "loo",
        loo: "roo"
    });

    Tap("Collection merge 2", Col.size, 3);

    Tap("Collection implement", Col.implement(Col3).toPairObject(), {
        roo: "doo",
        doo: "bar",
        foo: "new",
        new: "loo",
        loo: "roo"
    });

    Tap("Collection implement 2", Col.size, 5);

    const Col4 = new Qulity.Collection({
        something: "shouldn't match",
        doo: "something else",
        another: "also shouldn't match",
        new: "another item"
    });

    Tap("Collection intersect", Col.intersect(Col4).toPairObject(), {
        doo: "bar",
        new: "loo"
    });

    Tap("Collection intersect 2", Col.size, 5);

    Tap("Collection difference", Col.difference(Col4).toPairObject(), {
        roo: "doo",
        foo: "new",
        loo: "roo",
        something: "shouldn't match",
        another: "also shouldn't match"
    });

    Tap("Collection difference 2", Col.size, 5);

    Col.tap(TheCol => {
        Tap("Collection tap 1", TheCol.get("foo"), "new");
        Tap("Collection tap 2", TheCol.size, 5);
        Tap("Collection tap 3", TheCol.set("last", "item").toArray(), ["doo", "bar", "new", "loo", "roo", "item"]);
        Tap("Collection tap 4", TheCol.size, 6);
    })
    .tap(TheCol => {
        Tap("Collection tap 5", TheCol.get("last"), "item");
        Tap("Collection tap 6", TheCol.size, 6);
    });


    // BaseManager
    class User {
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }
    }

    const Man = new Qulity.Manager({}, User);

    const foo = new User("foo", 20);
    Man.add("foo", foo);
    const bar = new User("bar", 24);
    Man.add("bar", bar);
    const roo = new User("roo", 29);
    Man.add("roo", roo);
    const doo = new User("doo", 23);
    Man.add("doo", doo);

    Tap("Manager size 1", Man.cache.size, 4);
    Tap("Manager remove 1", Man.remove("doo"), Man);
    Tap("Manager size 2", Man.cache.size, 3);

    Tap("Manager resolve 1", Man.resolve("foo"), foo);
    Tap("Manager resolve 2", Man.resolve("bar"), bar);
    Tap("Manager resolve 3", Man.resolve("roo"), roo);
    Tap("Manager resolve 4", Man.resolve("doo"), undefined);
    
    Tap("Manager resolve 5", Man.resolve(foo), User);


    // DataStore
    const DS = new Qulity.DataStore();

    Tap("DataStore set 1", DS.set("foo", {value: "bar"}), DS);
    Tap("DataStore set 2", DS.set(4, {value: "doo"}), DS);
    Tap("DataStore set 3", DS.set(() => {}, {value: "bar"}), null);
    Tap("DataStore set 4", DS.set("foo", "bar"), null);
    Tap("DataStore set 3", DS.set("bar", 32), null);

    Tap("DataStore resolve 1", DS.resolve("foo"), {value: "bar"});
    Tap("DataStore resolve 2", DS.resolve(4), {value: "doo"});


    // Cache
    const CC = new Qulity.Cache();

    Tap("Cache set 1", CC.set("1", "2"), CC);
    Tap("Cache set 2", CC.set("2", "3"), CC);
    Tap("Cache set 3", CC.set("3", "4"), CC);

    Tap("Cache default 1", CC.default("1", "5"), false);
    Tap("Cache default 2", CC.get("1"), "2");
    Tap("Cache default 3", CC.default("3", "10"), false);
    Tap("Cache default 4", CC.get("3"), "4");
    Tap("Cache default 5", CC.default("5", "15"), true);
    Tap("Cache default 6", CC.get("5"), "15");

}
