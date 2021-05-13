const csv = require('csv-parser');
const fs = require('fs');
var cars = []
fs.createReadStream('./planning.csv')
  .pipe(csv( {skipLines: 2}))
  .on('data', (row) => {
    cars.push(row)
  })
  .on('end', () => {
    console.log(cars);
  });