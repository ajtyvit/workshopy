var fs = require('fs');
var csv = require('csv');

fs.readFile('workshops.csv', (err, data) => {
    csv.parse(data, (err, data) => {
        const csvEntries = data.slice(1);
        const workshops = csvEntries.map((csvEntry) => {
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
        // console.log(workshops);

        fs.writeFile('./filter/workshops.json', JSON.stringify(workshops, null, '  '), () => {
            console.log(`${workshops.length} workshops converted from CSV to JSON.`);
        });
    });
});
