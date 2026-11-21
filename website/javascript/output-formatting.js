import { processedData } from "./main.js";


// TODO: make this refresh based on an event listener on the settings section
export function test() {

    console.log(processedData)


    const displayType = new FormData( document.getElementById("display-type") ).getAll("display-type");
    const sortBy = new FormData( document.getElementById("sort-options") ).getAll("sort-by");
    const grouping = new FormData( document.getElementById("sort-options") ).getAll("grouping");

    const columns = new FormData( document.getElementById("columns") ).getAll("columns");
    const miscOptions = new FormData( document.getElementById("misc-options") ).getAll("utils");


    console.log(displayType)

    if (displayType[0] == "legacy") {
        console.log("stuff")

    } else {
        console.log("a")
    }

}

