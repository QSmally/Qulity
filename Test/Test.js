
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

}
