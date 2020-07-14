
const Path = require("path");
const FS   = require("fs");
const Repo = "https://github.com/QSmally/Qulity/blob/master/Documentation";

module.exports = (Files, Module, Tree) => {
    const Constructor = Tree.splice(Tree.findIndex(Element => Element.Ctx == "constructor"));
    FS.writeFileSync(`./Documentation/${Module}.md`, `\n# ${Path.basename(Module, ".js")}${Constructor.Extends ? `### Extends **${Constructor.Extends}**` : ""}\n\n` +
    `* [Start](${Repo}/Index.md)\n` + Files.map(Module => `* [Module](${Repo}/${Module}.md)`) + "\n\n" +
    Constructor.Description + `\n\n\`\`\`js\n${Constructor.Code}\`\`\`\n\n` +
    "# Values" + "\n\n" +
    "# Methods" + "\n\n");
} 
