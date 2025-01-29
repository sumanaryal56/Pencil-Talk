const {Pool} = require('pg');

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : "Assignment2",
    port : 5433,
    password : "2005"
});
const connection = async() => {
    try{
        const client = await pool.connect();
        console.log("Connected to the database Assignment2");
        client.release();
    }
    catch{
        console.log("Failed to establish the connection");
    }
}

connection();
module.exports = pool;

