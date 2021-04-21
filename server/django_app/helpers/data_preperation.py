import json
import re

def get_additive_type(code):

    code = re.sub('[a-z]', '', code)

    if(int(code) >= 100 and int(code) <= 199):
        return 'COLOURS'
    elif(int(code) >= 200 and int(code) <= 299):
        return 'PRESERVATIVES'
    elif(int(code) >= 300 and int(code) <= 399):
        return 'ANTIOXIDANTS'
    elif(int(code) >= 400 and int(code) <= 499):
        return 'THICKENERS'
    elif(int(code) >= 500 and int(code) <= 599):
        return 'ACIDITY_REGULATORS'
    elif(int(code) >= 600 and int(code) <= 699):
        return 'FLAVOUR_ENHANCERS'
    elif(int(code) >= 700 and int(code) <= 999):
        return 'SWEETENERS'
    else:
        return 'ADDITIONAL_CHEMICALS'

def get_additive_harmfulness(code):

    with open('./additives_harmfulness.json', 'r+') as json_file:
        data = json.load(json_file)
        json_file.close()
            
        if(code.isdigit()):
            code = int(code)

        if(data[0]["safe"].count(code)):
            return "SAFE"
        elif(data[1]["potentially_dangerous"].count(code)):
            return "POTENTIALLY_DANGEROUS"
        elif(data[2]["dangerous"].count(code)):
            return "DANGEROUS"
        else:
            return "NO_INFO"
    

def data_preperation():

    with open('../data.json', 'r+') as json_file:
        data = json.load(json_file)

        for item in data:
            item["type"] = get_additive_type(item["code"])
            item["description"] = "No description for this additive yet"
            item["harmfulness"] = get_additive_harmfulness(item["code"])
        
        json_file.close()

    with open('../data.json', 'w') as json_file:
        json.dump(data, json_file, indent=4)

data_preperation()