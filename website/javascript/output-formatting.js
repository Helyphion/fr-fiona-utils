import { processedData } from "./site.js";


let displayType, sortBy, grouping, columns, miscOptions = "";
let output = "";


function fetchSettings() {
    displayType = new FormData( document.getElementById("display-type") ).getAll("display-type");
    sortBy = new FormData( document.getElementById("sort-options") ).getAll("sort-by");
    grouping = new FormData( document.getElementById("sort-options") ).getAll("grouping");

    columns = new FormData( document.getElementById("columns") ).getAll("columns");
    miscOptions = new FormData( document.getElementById("misc-options") ).getAll("utils");
}

function createColumns() {
    if (columns.length > 1) {

        output = "[columns]\n";
        for (const x of columns) {
            output += `[size=4][b]${x.toUpperCase()}[/b][/size]\n{${x}}\n[nextcol]\n`
        }
        output = output.slice(0, -11)
        output += "\n[/columns]"

    }
}


// TODO: make this refresh based on an event listener on the settings section
export function test() {

    fetchSettings();
    

    if (displayType[0] == "legacy") {
        console.log("stuff")
        // TODO: uh, a lot.. all of this ig. gonna put the actual processing in legacy-layout.js and just call the func here I think
    } else {

        createColumns();


        console.log(processedData)
        

        // TODO: prolly makes sense to split this into several functions, and just conditionally call them here.

    }

    console.log(output)

}

