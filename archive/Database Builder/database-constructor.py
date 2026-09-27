# import json


with open("req-ids.txt", "r") as file:
    reqIds = file.read().splitlines()

with open("req-names.txt", "r") as file:
    reqNames = file.read().splitlines()


output = ""
currentFeat = ""
featCount = 0
currentLine = 0

for line in reqNames:
    famName = ""
    sourceNote = ""

    if line != "":
    
        if line.isupper():
            currentSource = line.title()
            print(line)
        else:

            parenthesis = False
            for char in line:
                    
                if char == "(":
                    parenthesis = True
                    famName = famName.strip() # remove trailing space
                
                if parenthesis:
                    sourceNote += char
                else:
                    famName += char
            
            famId = ""
            for char in reqIds[currentLine]:
                if char.isnumeric():
                    famId += char
                elif char == "(":
                    break # ensures potential numbers in the parenthesis aren't added to the id
            

            output += f'\n        "{famName}": ' + '{' + f'"id": {famId}, "source": "{currentSource}"'
            if sourceNote: output += f', "note": "{sourceNote[1:-1].lower()}"' # [1:-1] removes parentheses
            output += '},'



    else:
        currentFeat = f"fam{featCount}"
        output = output[:-1] + "}},\n" # adds in two extra closing parentheses before the comma
        output += f'\n"{currentFeat}": ' + '{"id": 666666, "requires": {'
        featCount += 1
    
    currentLine += 1



with open("output.json", "w") as file:
    file.write(output)

print("output.json has been (re)generated; though BE WARNED, it needs some editing of the first and last line to be valid json >_> (also the capitalisation of sources might be messy)")