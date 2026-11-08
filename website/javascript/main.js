import { updateLinks } from "./site.js";
import { calculateOutput } from "./backend.js";


async function fetchJsonData(file) {
    const response = await fetch(file);
    return await response.json();
}

const featsDatabase = await fetchJsonData("./feats.json");

const userData = new Map();


function parseInput(inputField) {
    userData.set(inputField.id, inputField.value)
    calculateOutput();
}

function createEventListener(elementID) {
    const inputField = document.getElementById(elementID);
    inputField.addEventListener("input", () => { parseInput(inputField) })

    if (elementID == "uuid") {
        inputField.addEventListener("input", () => { updateLinks() })
    }
}


function main() {

    createEventListener("uuid");
    createEventListener("owned-fams");
    createEventListener("awakened-fams");
    createEventListener("bonding-fams");

}

main();


export { userData, featsDatabase };