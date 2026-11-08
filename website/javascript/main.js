import { updateLinks } from "./site.js";


async function fetchJsonData(file) {
    const response = await fetch(file);
    return await response.json();
}

const featsDatabase = await fetchJsonData("../feats.json");

const userData = new Map();


function fetchInput(inputField) {
    userData.set(inputField.id, inputField.value)
}

function createEventListener(elementID) {
    const inputField = document.getElementById(elementID);
    inputField.addEventListener("input", () => { fetchInput(inputField) })

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