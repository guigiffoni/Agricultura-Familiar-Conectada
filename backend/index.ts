import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "db",
    user: "root",
    password: "1234",
    database: "teste"
});

connection.connect();

connection.query("SELECT 1 + 1", (a, b, c) => {
    console.log(a)
    console.log(b)
    console.log(c)
});

connection.end();

Bun.serve({
  port: 3000,
  fetch() {
    const response = new Response(JSON.stringify({ data: 'Success' }));
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  }
});