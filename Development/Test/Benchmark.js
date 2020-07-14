
const Qulity = require("../../Qulity");
const DS = new Qulity.DataStore();

DS.set("foo", {content: "bar"});
DS.set("bar", {content: "roo"});
DS.set("roo", {content: "foo"});

console.time("Uncached");
DS.resolve("foo");
console.timeEnd("Uncached");

console.time("Cached");
DS.resolve("foo");
console.timeEnd("Cached");
