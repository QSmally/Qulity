
const Qulity  = require("../../Qulity");
const Entries = {};

try {

    require("./Test")(Qulity, (Name, Output, Expected) => {
        Entries[Name] = {
            Passed:   JSON.stringify(Output) == JSON.stringify(Expected),
            Output:   Output,
            Expected: Expected
        };
    });

    const Failed = [];

    for (const Key in Entries) {
        if (!Entries[Key].Passed)
        Failed.push({
            Test:     Key,
            Output:   Entries[Key].Output,
            Expected: Entries[Key].Expected
        });
    }

    console.log(`Successfully ran ${Object.keys(Entries).length} tests\nOf which ${Failed.length} have failed`);

    if (Failed.length) {
        console.log("Failed test stack:\n");
        Failed.forEach(Entry => {
            console.log(Entry.Test,
                "\n", Entry.Output,
                "\n", Entry.Expected
            );
        });
    }

} catch (Err) {
    console.error(`Failed to run tests\n${Err}`);
} finally {
    if (process.argv.includes("-d")) console.debug(Entries);
}
