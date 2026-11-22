import { processedData } from "./site.js";


// TODO: make this refresh based on an event listener on the settings section
export function test() {

    console.log(processedData)

    let output = "";


    const displayType = new FormData( document.getElementById("display-type") ).getAll("display-type");
    const sortBy = new FormData( document.getElementById("sort-options") ).getAll("sort-by");
    const grouping = new FormData( document.getElementById("sort-options") ).getAll("grouping");

    const columns = new FormData( document.getElementById("columns") ).getAll("columns");
    const miscOptions = new FormData( document.getElementById("misc-options") ).getAll("utils");



    if (displayType[0] == "legacy") {
        console.log("stuff")
        // TODO: uh, a lot.. all of this ig. gonna put the actual processing in legacy-layout.js and just call the func here I think
    } else {

        console.log(columns)
        if (columns.length > 1) {
            console.log("yay?")

            output = "[columns]\n";

            for (const x of columns) {
                output += `[size=4][b]${x.toUpperCase()}[/b][/size]\n{${x}}\n[nextcol]\n`
            }

            output = output.slice(0, -11)
            output += "\n[/columns]"

            console.log(output)
        }

        // TODO: might make sense to split this into several functions, and just conditionally call them here.

    }

}

