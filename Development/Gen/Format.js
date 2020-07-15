
const Path = require("path");
const FS   = require("fs");
const Repo = "https://github.com/QSmally/Qulity/blob/master/Documentation";

function FormatEntry (Ctx, Method) {
    const Params = (Ctx.Params || []).map(Par => [
        Par.split(" ")[0].replace(/[\{\}]/g, ""),
        Par.split(" ")[1].replace("[", "").replace("]", "?"),
        Par.split(" ").slice(2).join(" ")
    ]);

    return [
        `## ${Ctx.Value}${Method ? `(${Params.map(Par => Par[1]).join(", ")})` : ""}${(Ctx.Flags || []).includes("readonly") ? " [Read Only]" : ""}`,
        `> ${Ctx.Description}` + (Ctx.Params ? `\n> | Key | Type | Description |\n> | --- | --- | --- |\n${Params.map(Par => `> | ${Par[1]} | ${Par[0].replace(/\*/g, "Any").replace(/\|/g, ", ")} | ${Par[2]} |`).join("\n")}` : ""),
        `>\n> ${Ctx.Type ? `Type **${Ctx.Type}**` : Ctx.Returns ? `Returns **${Ctx.Returns.split(" ")[0].replace(/\*/g, "Any")}** ${Ctx.Returns.split(" ").slice(1).join(" ")}` : "Returns **{Null}**"}`
    ].join("\n");
}

module.exports = (Files, Module, Tree) => {

    const Constructor = Tree.splice(Tree.findIndex(Element => Element.Value == "constructor"), 1)[0];
    let Methods = [], Values = [];

    Tree.filter(Entry => !(Entry.Flags || []).includes("private"))
    .forEach(Entry => {
        if ((Entry.Flags || []).includes("name")) Values.push(Entry);
        else Methods.push(Entry);
    });

    const ModuleName = Path.basename(Module, ".js");

    FS.writeFileSync(`./Documentation/${ModuleName}.md`, [
        `\n# ${ModuleName}${Constructor.Extends ? `\n### Extends **${Constructor.Extends}**` : ""}`,
        `* [Start](${Repo}/Index.md)\n` + Files.map(Module => `* [${Module}](${Repo}/${Module}.md)`).join("\n"),
        `${Constructor.Description}\n\`\`\`js\n${Constructor.Code}\n\`\`\`` +
        `${Values.length ? `\n\n# Values\n` : ""}${Values.map(Element => FormatEntry(Element, false)).join("\n\n")}` +
        `${Methods.length ? `\n\n# Methods\n` : ""}${Methods.map(Element => FormatEntry(Element, true)).join("\n\n")}\n`
    ].join("\n\n"), {encoding: "utf-8"});

} 
