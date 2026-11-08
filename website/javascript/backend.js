import { userData } from "./main.js";

function removeNicknamesAndBlanks(list) {
    return list.filter(fam => fam[0] !== '“' && fam.trim() !== '');
}