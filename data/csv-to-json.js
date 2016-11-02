const fs = require('fs');
const csv = require('csv');

const pathToCsv = process.argv[2] || `${__dirname}/workshops.csv`;
const pathToJson = `${__dirname}/workshops.json`;

console.log(`Converting '${pathToCsv}'`);

fs.readFile(pathToCsv, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  csv.parse(data, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const csvEntries = data.slice(1);
    const workshops = csvEntries.map(csvEntry => {
      return {
        name: csvEntry[3],
        description: csvEntry[4],
        timeFrame: csvEntry[8],
        regions: csvEntry[5].split(', '),
        lecturer: {
          name: csvEntry[1],
          role: csvEntry[2]
        }
      };
    });

    console.log(`Writing to '${pathToJson}'`);

    fs.writeFile(pathToJson, JSON.stringify(workshops, null, '  '), () => {
      console.log(`${workshops.length} workshops converted from CSV to JSON.`);
    });
  });
});
