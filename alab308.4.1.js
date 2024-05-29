const csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//Part 2 - Expanding Functionality - Turning csv into an array of arrays

function csvToArrayOfArrays(csvString) {
  const rows = csvString.split("\n");
  const arrayOfArrays = [];

  for (const row of rows) {
    arrayOfArrays.push(row.split(","));
  }
  return arrayOfArrays;
}

// Part 3 - Transforming Data - Turning an array of arrays to array of objects

function arrayOfArraysToObjects(arrayOfArrays) {
  const headers = arrayOfArrays[0];
  const result = [];
  for (let i = 1; i < arrayOfArrays.length; i++) {
    const row = arrayOfArrays[i];
    const newObject = {};
    for (let j = 0; j < headers.length; j++) {
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

//Part 4 - Sorting and Manipulating Data - Calculating the average age of the group

let totalAge = 0;
for (const obj of arrayOfObjects) {
  totalAge += parseInt(obj.Age);
}

const averageAge = totalAge / arrayOfObjects.length;

console.log("The average age is: " + averageAge);

//Part 5 - Full circle - Transforming the final set of data back into CSV format

function arrayOfObjectsToCSV(arrayOfObjects) {
  if (arrayOfObjects.length === 0) return "";

  const headers = Object.keys(arrayOfObjects[0]);
  const csvRows = [headers.join(",")];

  for (const obj of arrayOfObjects) {
    const row = headers.map((header) => obj[header]);
    csvRows.push(row.join(","));
  }
  return csvRows.join("\n");
}

const newCsv = arrayOfObjectsToCSV(arrayOfObjects);
console.log(newCsv);
