
/*
    Generates Qulity documentation
*/

const Path = require("path");
const FS   = require("fs");
let Files  = [];

FS.readdirSync("./lib/").forEach(Section => {
    if (FS.statSync(`./lib/${Section}`).isDirectory())
    FS.readdirSync(`./lib/${Section}`).forEach(File => Files.push(`./lib/${Section}/${File}`));
    else Files.push(`./lib/${Section}`);
});

const Keys = Object.keys(require("../../Qulity"));
Files.filter(File => Keys.includes(Path.basename(File, ".js")))
.forEach(Context => require("./Parse")(Context));
