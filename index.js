const fs = require('fs');
const csv = require('csvtojson');

const csvFilePath = 'customer-data.csv';

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    //console.log(jsonObj);
    fs.writeFile('customer-data.json', JSON.stringify(jsonObj,null,2), function (err, file) {
        if (err) console.log(err);
        console.log('Converted Successfully');
    })
})
