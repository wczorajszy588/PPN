const mongoose = require("mongoose");

dbProps = {
    dbName: "ppn",
    address: "localhost",
    protocol: "mongodb",
    port: "27017"
}
    
const connectionPromise = 
    mongoose.connect(`${dbProps.protocol}://${dbProps.address}:${dbProps.port}/${dbProps.dbName}`);
    
connectionPromise.then(function(db) {
    console.log(`Nawiązano połączenie z bazą "${dbProps.dbName}" na porcie ${dbProps.port}`);
});
connectionPromise.catch(function(error) {
    console.log(error);
});

