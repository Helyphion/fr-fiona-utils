import json


def removeNicknames(list):
    for fam in list:
        if fam[0] == '“':
            list.remove(fam)

def removeBlankLinkes(list):
    while "" in list:
        list.remove("")


with open("../Feats Database/feats.json", "r") as file:
    rawData = file.read()
    database = json.loads(rawData)

with open("owned.txt", "r") as file:
    ownedFams = file.read().splitlines()

removeNicknames(ownedFams)
removeBlankLinkes(ownedFams)

with open("in-progress.txt", "r") as file:
    equippedFams = file.read().splitlines()

removeNicknames(equippedFams)
removeBlankLinkes(equippedFams)

with open("awakened.txt", "r") as file:
    awakenedFams = file.read().splitlines()
# https://www1.flightrising.com/bestiary/676173?view=all&filter=true&bond_level=awakened&limit=60&display=compact

removeNicknames(awakenedFams)
removeBlankLinkes(awakenedFams)


output = "[columns]\n[center][b] awakened / owned / in-progress / missing[/b][/center]\n"

for feat in database.keys():
    for fam in database[feat]["requires"]:
        # add fam name to famText
        # try...except for if database[feat]["requires"][fam]["note"]
        # add " - {note}" or " ({note})" to famText if so
        if fam in awakenedFams:
            awakenedOutput.append(fam)
            print(fam)
            # probably make ouput arrays (outputAwakened?), with an "if" for every column
            # awakened / owned / in-progress / missing
            # need to append the "note" field after the name when there is one
            # also consider how to sort the "missing" column- prolly bosses last? maybe split by retired/events/coli? idk
            # also ideally this whole thing would be a website eventually but aughhh I don't wanna rewrite this in javascript :(((


with open("output.txt", "w") as file:
    file.write(output)