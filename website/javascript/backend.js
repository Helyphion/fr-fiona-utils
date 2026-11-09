import { userData, featsDatabase } from "./main.js";



function removeNicknamesAndBlanks(list) {
    return list.filter(fam => fam[0] !== '“' && fam.trim() !== '');
}

export function calculateOutput() {
    console.log(featsDatabase)

    // only runs if at least owned fams and awakened fams have data
    if ( userData.get("owned-fams") && userData.get("awakened-fams") ) {
        
        let ownedFams = userData.get("owned-fams");
        let awakenedFams = userData.get("awakened-fams");
        let bondingFams = userData.get("bonding-fams");

        ownedFams = removeNicknamesAndBlanks(ownedFams.split(/\r?\n/));
        awakenedFams = removeNicknamesAndBlanks(awakenedFams.split(/\r?\n/));
        // parses data for in-progress fams only if it's been provided
        if ( userData.get("bonding-fams") ) {
            bondingFams = removeNicknamesAndBlanks(bondingFams.split(/\r?\n/));
        }
    

        const outputMap = new Map([
            ["awakened", new Set()],
            ["owned", new Set()],
            ["bonding", new Set()],
            ["missing", new Set()]
        ]);


        for (const [feat, featData] of Object.entries(featsDatabase)) {

            for (const [fam, famData] of Object.entries(featData["requires"])) {
    
                if (awakenedFams.includes(fam)) {
                    outputMap.get("awakened").add({[fam]: famData});
                    
                } else if (userData.get("bonding-fams")  && bondingFams.includes(fam)) {
                    outputMap.get("bonding").add({[fam]: famData});

                } else if (ownedFams.includes(fam)) {
                    outputMap.get("owned").add({[fam]: famData});

                } else {
                    outputMap.get("missing").add({[fam]: famData});
                }

            }
        }
        
        return outputMap;

    }
}