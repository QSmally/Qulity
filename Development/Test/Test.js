
module.exports = (Qulity, Tap) => {

    // Collection

    const Col = new Qulity.Collection({
        "foo": "bar",
        "roo": "doo",
        "wee": "woo",
        "boo": "voo"
    });

    Tap("Collection#toArray",    Col.toArray(),    ["bar", "doo", "woo", "voo"]);
    Tap("Collection#toKeyArray", Col.toKeyArray(), ["foo", "roo", "wee", "boo"]);
    Tap("Collection#toObject",   Col.toObject(),   {"foo": "bar", "roo": "doo", "wee": "woo", "boo": "voo"});

    Tap("Collection#first",      Col.first(),   "bar");
    Tap("Collection#first-0",    Col.first(0),  null);
    Tap("Collection#first-2",    Col.first(2),  ["bar", "doo"]);
    Tap("Collection#first-5",    Col.first(5),  ["bar", "doo", "woo", "voo"]);
    Tap("Collection#first-neg1", Col.first(-1), "voo");
    Tap("Collection#first-neg2", Col.first(-2), ["voo", "woo"]);

    Tap("Collection#last",      Col.last(),   "voo");
    Tap("Collection#last-0",    Col.last(0),  null);
    Tap("Collection#last-2",    Col.last(2),  ["voo", "woo"]);
    Tap("Collection#last-5",    Col.last(5),  ["voo", "woo", "doo", "bar"]);
    Tap("Collection#last-neg1", Col.last(-1), "bar");
    Tap("Collection#last-neg2", Col.last(-2), ["bar", "doo"]);

    Tap("Collection#find1", Col.find((v, k, c) => k == "wee"), "woo");
    Tap("Collection#find2", Col.find((v, k, c) => v == "bar"), "bar");
    Tap("Collection#find3", Col.find((v, k, c) => v == "voo"), "voo");

    Tap("Collection#sweep1", Col.sweep((v, k, c) => k == "wee"), 1);
    Tap("Collection#sweep2", Col.sweep((v, k, c) => v == "bar" || k == "boo"), 2);
    Tap("Collection#sweep3", Col.sweep((v, k, c) => v == "bar"), 0);

    Col.set("foo", "bar");
    Col.set("wee", "woo");
    Col.set("bee", "voo");
    Col.set("zoo", "goo");

    let Filtered = Col.filter((v, k, c) => k.includes("o"));
    Tap("Collection#filter",     Filtered.toArray(),    ["doo", "bar", "goo"]);
    Tap("Collection#filterKeys", Filtered.toKeyArray(), ["roo", "foo", "zoo"]);

    let Partitioned = Col.partition((v, k, c) => k.includes("o"));
    Tap("Collection#partition1", Partitioned[0].toArray(), ["doo", "bar", "goo"]);
    Tap("Collection#partition2", Partitioned[1].toArray(), ["woo", "voo"]);

    Tap("Collection#map", Col.map((v, k, i, c) => `${i}-${v}!`), ["0-doo!", "1-bar!", "2-woo!", "3-voo!", "4-goo!"]);

    Tap("Collection#exists1", Col.exists((v, k, c) => k == "foo"),      true);
    Tap("Collection#exists2", Col.exists((v, k, c) => v == "foo"),      false);
    Tap("Collection#exists3", Col.exists((v, k, c) => k == "goo"),      false);
    Tap("Collection#exists4", Col.exists((v, k, c) => v == "goo"),      true);
    Tap("Collection#exists5", Col.exists((v, k, c) => k.includes("w")), true);

    Tap("Collection#every1", Col.every((v, k, c) => k == "foo"),      false);
    Tap("Collection#every2", Col.every((v, k, c) => v.includes("o")), false);
    Tap("Collection#every3", Col.every((v, k, c) => k.length == 3),   true);

    Tap("Collection#reduce", Col.reduce((a, v, k, c) => `${a}-${k}`), "doo-foo-wee-bee-zoo");

    let NewCol = new Qulity.Collection({"foo": "bar", "wee": "woo", "ree": "doo"});
    Tap("Collection#intersect",  Col.intersect(NewCol).toKeyArray(),  ["foo", "wee"]);
    Tap("Collection#difference", Col.difference(NewCol).toKeyArray(), ["ree", "roo", "bee", "zoo"]);

    Tap("Collection#merge1", Col.merge(NewCol).toArray(),    ["doo", "bar", "woo", "voo", "goo", "doo"]);
    Tap("Collection#merge2", Col.merge(NewCol).toKeyArray(), ["roo", "foo", "wee", "bee", "zoo", "ree"]);

    let UnsortedCol = new Qulity.Collection({"foo": 347, "bar": 92, "roo": 287, "doo": 38, "boo": 734});
    Tap("Collection#sort", UnsortedCol.sort((a, b) => b - a).toArray(), [734, 347, 287, 92, 38]);


    // DataStore

    const DS = new Qulity.DataStore([
        ["foo", {content: 1}],
        ["bar", {content: 2}],
        ["roo", {content: 3}],
        ["doo", {content: 4}],
    ]);

    Tap("DataStore#size1", DS.size, 4);

    DS.delete("roo");
    Tap("DataStore#size2", DS.size, 3);

    Tap("DataStore#LRR1", DS.LRR, null);

    Tap("DataStore#resolve1", DS.resolve("doo"), {content: 4, _DataStore: "doo"});
    Tap("DataStore#LRR2", DS.LRR, {content: 4, _DataStore: "doo"});
    Tap("DataStore#resolve2", DS.resolve("foo"), {content: 1, _DataStore: "foo"});
    Tap("DataStore#LRR3", DS.LRR, {content: 1, _DataStore: "foo"});

    DS.delete("foo");
    Tap("DataStore#size3", DS.size, 2);
    Tap("DataStore#LRR4", DS.LRR, null);

    Tap("DataStore#resolve3", DS.resolve("foo"), undefined);
    Tap("DataStore#LRR5", DS.LRR, null);


    // Manager
    
    class Person {
        constructor (n, a, m) {
            this.name  = n;
            this.age   = parseInt(a);
            this.admin = m;
        }
    }

    class UserManager extends Qulity.Manager {
        constructor (...Options) {
            super(...Options);
        }

        get admins () {
            return this.Cache.filter(u => u.admin);
        }

        get cacheSize () {
            return this.Cache.size;
        }
    }

    var ref = new Person("foo", 20, false);

    const UM = new UserManager({
        "hd7883a": ref,
        "a783hat": new Person("bar", 18, true),
        "a7dyssd": new Person("roo", 22, false)
    }, Person);

    Tap("Manager#resolve1", typeof UM.resolve(new Person("doo", 27, false)) == "function", true);
    Tap("Manager#add1", UM.add("b638clt", new Person("goo", 23, true)).Cache.size, 4);
    Tap("Manager#cacheSize", UM.cacheSize, 4);

    Tap("Manager#admins", UM.admins.size, 2);
    
    Tap("Manager#resolve2", UM.resolve("hd7884a"), undefined);
    Tap("Manager#resolve3", UM.resolve("hd7883a"), ref);

    // Non-addressable

    class NAUserManager extends Qulity.Manager {
        constructor (Client, ...Options) {
            super(...Options)
            this.Client = Client;
        }
    }

    const NUM = new NAUserManager({
        name: "Smally"
    });

    Tap("Manager#add2", NUM.add("hd7883a", {name: "foo"}).Cache.size, 1);
    Tap("Manager#add3", NUM.add("a783hat", {name: "bar"}).Cache.size, 2);
    Tap("Manager#add4", NUM.add("a7dyssd", {name: "roo"}).Cache.size, 3);

    Tap("Manager#resolve4", NUM.resolve(new Person("foo", 20, false)), null);

    Tap("Manager#toObject", NUM.toObject(), {
        hd7883a: {name: "foo"},
        a783hat: {name: "bar"},
        a7dyssd: {name: "roo"},
    });


    // Queue

    const Q = new Qulity.Queue([
        {name: "foo"},
        {name: "bar"},
        {name: "roo"}
    ]);

    Tap("Queue#length", Q.Values.length, 3);
    Tap("Queue#size1", Q.size, 3);
    Tap("Queue#add1", Q.add({name: "doo"}, true), 4);

    Tap("Queue#remove1", Q.remove(1), 3);
    Tap("Queue#remove2", Q.remove(5), 3);
    Tap("Queue#remove3", Q.remove(-5), 3);

    Tap("Queue#add2", Q.add({name: "goo"}), 4);

    Tap("Queue#next1", Q.next(), {name: "doo"});
    Tap("Queue#size2", Q.size, 3);

    Tap("Queue#iterate", Q.iterate((Val, IdxDS, Idx) => {
        const User = IdxDS.resolve(Val.name);
        User["name"] = Val.name + "!";
        User["idx"] = Idx;
        IdxDS.set(User);
    }, {
        bar: {age: 15},
        goo: {age: 19},
        roo: {age: 23}
    }).toObject(), {
        bar: {age: 15, _DataStore: "bar", name: "bar!", idx: 0},
        goo: {age: 19, _DataStore: "goo", name: "goo!", idx: 2},
        roo: {age: 23, _DataStore: "roo", name: "roo!", idx: 1}
    });

    Tap("Queue#size3", Q.size, 0);

    Tap("Queue#add3", Q.add({name: "foo"}, true), 1);
    Tap("Queue#add4", Q.add({name: "bar"}, true), 2);
    Tap("Queue#add5", Q.add({name: "roo"}, true), 3);

    Tap("Queue#size4", Q.size, 3);

    Tap("Queue#remove4", Q.remove((Val, Idx) => {
        return typeof Val == "function";
    }), 3);

    Tap("Queue#size5", Q.size, 3);

    Tap("Queue#remove5", Q.remove((Val, Idx) => {
        return Val["name"].includes("o");
    }), 2);

    Tap("Queue#size6", Q.size, 2);

    Tap("Queue#remove6", Q.remove((Val, Idx) => {
        return Idx === 0;
    }), 1);

    Tap("Queue#size7", Q.size, 1);
    Tap("Queue#next2", Q.next(), {name: "foo"});
    Tap("Queue#size8", Q.size, 0);

}
