const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/media";
let conn;
const connnectToDatabase = (cb) => {
    MongoClient.connect(uri)
    .then(client => {
        console.log("Connected to Database");
        conn = client.db();
        cb();
    })
    .catch(err => {
        console.log("Database connection error: ", err);
        cb(err);
    })
}
const getDB = () => {
    return conn;
}
module.exports = {
    connnectToDatabase,
    getDB
}