const csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

function parseCSV(csvString) {
  const rows = csvString.split("\n");

  const result = [];

  for (let i = 0; i < rows.length; i++) {
    const columns = rows[i].split(",");
    result.push(columns);
  }

  return result;
}

const parsedData = parseCSV(csv);
console.log(parsedData);
