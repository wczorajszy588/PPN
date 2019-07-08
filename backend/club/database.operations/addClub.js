const mongoose = require("mongoose");

db = {
    dbName: "ppn",
    address: "localhost",
    protocol: "mongodb",
    port: "27017"
}

const conn = mongoose.connect(`
    ${db.protocol}://
    ${db.address}:
    ${db.port}/
    ${db.name}
    `);

conn.then(async function(db) {
    
})