
const Qulity = require("../../Qulity");

console.log(`Benchmark:
Fill instances with 1 million entries.
Fetch 5 million over the same elements.`);

const Coll = new Qulity.Collection();
for (let i = 0; i < 1000000; i++) Coll.set(i, i);

console.time("collection");
for (let i = 0; i < 5000000; i++) Coll.get(i % 1000000);
console.timeEnd("collection");


const DS = new Qulity.DataStore();
for (let i = 0; i < 1000000; i++) DS.set(i, i);

console.time("datastore");
for (let i = 0; i < 5000000; i++) DS.resolve(i % 1000000);
console.timeEnd("datastore");
