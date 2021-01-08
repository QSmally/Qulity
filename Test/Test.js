
module.exports = (Qulity, Tap) => {

    // Collection
    const Col = new Qulity.Collection();

    Col.set("foo", "bar");
    Col.set("bar", "roo");
    Col.set("roo", "doo");
    Col.set("doo", "bar");

    Tap("Collection#get", Col.get("foo"), "bar");

    Tap("Collection#size", Col.size, 4);
    Tap("Collection#delete", Col.delete("foo").size, 3);
    Tap("Collection#delete2", Col.delete("bar").size, 2);

    Tap("Collection#get2", Col.get("foo"), undefined);
    Tap("Collection#toArray", Col.toArray(), ["doo", "bar"]);

    Tap("Collection#set", Col.set("foo", "new").size, 3);
    Tap("Collection#has", Col.has("bar"), false);
    Tap("Collection#has2", Col.has("foo"), true);

    Tap("Collection#get2", Col.get("foo"), "new");
    Tap("Collection#toArray", Col.toArray(), ["doo", "bar", "new"]);

}
