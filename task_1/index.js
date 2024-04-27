import {encoded, translations} from './data.js'
function decodeFields(encoded, translations) {
    const decoded = [];

    const uniqueIds = new Set();

    encoded.forEach(item => {
        const decodedItem = {...item};

        for (const key in item) {
            if (key.endsWith("Id") && translations[item[key]]) {
                decodedItem[key] = translations[item[key]];
                uniqueIds.add(item[key]);
            }
        }

        decoded.push(decodedItem);
    });

    console.log("Уникальные id из encoded:", Array.from(uniqueIds));

    return decoded;
}

const decodedData = decodeFields(encoded, translations);
console.log(decodedData);
console.log("Let's rock")
console.log(encoded, translations)



// console.log(decoded)
