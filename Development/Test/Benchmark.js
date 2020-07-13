
const Qulity = require("../../Qulity");
const Col    = new Qulity.Collection();

Col.set("foo", "bar");
Col.set("roo", "doo");
Col.set("dee", "wee");

console.log(Col);

const NewCol = Col.clone();
console.log(NewCol);
