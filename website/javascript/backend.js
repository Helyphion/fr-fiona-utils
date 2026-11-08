import { userData, featsDatabase } from "./main.js";

function removeNicknamesAndBlanks(list) {
    return list.filter(fam => fam[0] !== '“' && fam.trim() !== '');
}

export function calculateOutput() {
    console.log(featsDatabase)

    for (const [feat, data] of Object.entries(featsDatabase)) {
        console.log(data)
        for (const fam of Object.keys(data["requires"])) {
            console.log(fam)

            if (awakenedFams.includes(fam)) {
                // ^ unsure if that format is right yet
                // also need to set up a way of testing this without the validation of data being filled in, for now..
                // I should get something to eat
            }
        }
    }

    // only runs if at least owned fams and awakened fams have data
    if ( userData.get("owned-fams") && userData.get("awakened-fams") ) {
        
        let ownedFams = userData.get("owned-fams").split(/\r?\n/);
        let awakenedFams = userData.get("awakened-fams").split(/\r?\n/);

        ownedFams = removeNicknamesAndBlanks(ownedFams);
        awakenedFams = removeNicknamesAndBlanks(awakenedFams);
        
        console.log(ownedFams);

        if ( userData.get("bonding-fams") ) {

            let bondingFams = userData.get("bonding-fams").split(/\r?\n/);
            bondingFams = removeNicknamesAndBlanks(bondingFams);

        }

    }

}