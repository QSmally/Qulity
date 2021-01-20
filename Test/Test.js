
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

    Tap("Collection exists", Col.exists(V => V === "bar"), true);
    Tap("Collection exists 2", Col.exists((_, K) => K === "foo"), true);
    Tap("Collection exists 3", Col.exists(V => V === "none"), false);

    Tap("Collection every", Col.every(Item => Item.length === 3), true);
    Tap("Collection every 2", Col.every(Item => Item.length === 4), false);
    Tap("Collection every 3", Col.every(Item => Item === "doo"), false);

}
