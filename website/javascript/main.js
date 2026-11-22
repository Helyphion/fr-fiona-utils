import { test } from "./output-formatting.js";
import { listenForData } from "./site.js";


async function fetchJsonData(file) {
    const response = await fetch(file);
    return await response.json();
}

const featsDatabase = await fetchJsonData("./feats.json");


function main() {

    listenForData("uuid");
    listenForData("owned-fams");
    listenForData("awakened-fams");
    listenForData("bonding-fams");

    test()

    const settingsBox = document.getElementById("settings");
    settingsBox.addEventListener("change", () => test()) // TODO: ..rename this function

}

main();


export { featsDatabase };