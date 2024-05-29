const csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//Turning csv into an array of arrays

function csvToArrayOfArrays(csvString) {
  const rows = csvString.split("\n");
  const arrayOfArrays = [];

  for (const row of rows) {
    arrayOfArrays.push(row.split(","));
  }
  return arrayOfArrays;
}

// Turning an array of arrays to array of objects

function arrayOfArraysToObjects(arrayOfArrays) {
  const headers = arrayOfArrays.shift();
  const result = [];
  for (let i = 1; i < arrayOfArrays.length; i++) {
    const row = arrayOfArrays[i];
    const newObject = {};
    for (let j = 0; j < headers.length; i++) {
      newObject[headers[j]] = row[j];
    }
    result.push(newObject);
  }
  return result;
}

const arrayOfArrays = csvToArrayOfArrays(csv);
const arrayOfObjects = arrayOfArraysToObjects(arrayOfArrays);

//Checking if it worked
console.log(csv);
console.log(arrayOfArrays);
console.log(arrayOfObjects);
