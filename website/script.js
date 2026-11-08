const userData = new Map();


function fetchInput(inputField) {
    userData.set(inputField.id, inputField.value)
}

function updateLinks() {
    // can maybe make this a proper function with f"{elementID}-search" (whatever the equiv in js is)
    const ownedFamsLink = document.getElementById("owned-fams-search");
    const awakenedFamsLink = document.getElementById("awakened-fams-search");
    const bondingFamsLink = document.getElementById("bonding-fams-search");

    if (userData.get("uuid") != "") {

        ownedFamsLink.href = `https://www1.flightrising.com/bestiary/${userData.get("uuid")}?view=discovered&filter=true&bond_level=not-awakened&limit=60&display=compact`;
        awakenedFamsLink.href = `https://www1.flightrising.com/bestiary/${userData.get("uuid")}?view=all&filter=true&location=&bond_level=awakened&limit=60&display=compact`;
        bondingFamsLink.href = `https://www1.flightrising.com/bestiary/${userData.get("uuid")}?view=discovered&filter=true&location=lair&bond_level=not-awakened&limit=60&display=compact`;

    } else {
        ownedFamsLink.removeAttribute("href");
        awakenedFamsLink.removeAttribute("href");
        bondingFamsLink.removeAttribute("href");
        // undo all href setting :P
    }
}

function createEventListener(elementID) {
    const inputField = document.getElementById(elementID);
    inputField.addEventListener("input", () => { fetchInput(inputField) })

    if (elementID == "uuid") {
        inputField.addEventListener("input", () => { updateLinks() })
    }
}


createEventListener("uuid");
createEventListener("owned-fams");
