TEST_JSON_OBJ = {
    "ProfileId": "12w562qrx",
    "PersonInfo": {
        "Name": "Василий Иванов",
        "BirthDate": "12-09-1990",
        "Citizenship": "Russian Federation"
    },
    "CardInfo": [
        {
            "CardNumber": "1234890456793333",
            "CardName": "VISA CLASSIC",
            "ExpDate": "30-02-2019"
        },
        {
            "CardNumber": "1234000145292133",
            "CardName": "MASTERCARD GOLD",
            "ExpDate": "21-05-2020"
        },
        {
            "CardNumber": "1234000145293333",
            "CardName": "MIR КЛАССИЧЕСКАЯ",
            "ExpDate": "02-12-2019"
        }
    ]
 }

function getCardsArrayExpDate(json, date) {
    const parsedJson = JSON.parse(json)
    let returnArray = []
    let tempDate
    let tempStr
    parsedJson.CardInfo?.forEach(card => {
        tempDate = new Date(card.ExpDate.substr(card.ExpDate.length-4)+'-'+card.ExpDate.substr(3,2)+'-'+card.ExpDate.substr(0,2))
        if(tempDate < date) {
            returnArray.push(card.CardNumber.substr(card.CardNumber.length-4))
        }
    })
    return returnArray.length ? returnArray : null
}

let date1 = new Date("2019-01-01")
let date2 = new Date("2020-01-01")
let date3 = new Date("2021-01-01")

console.log(getCardsArrayExpDate(JSON.stringify(TEST_JSON_OBJ), date1))
console.log(getCardsArrayExpDate(JSON.stringify(TEST_JSON_OBJ), date2))
console.log(getCardsArrayExpDate(JSON.stringify(TEST_JSON_OBJ), date3))