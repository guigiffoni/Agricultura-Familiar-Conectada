import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: 'mysql_db',
    user: 'root',
    password: '1234',
    database: 'agrofamlink',
})

const server = Bun.serve({
    port: 80,
    routes: {
        "/api/status": new Response("OK"),
        "/api/produtos": async () => {
            let dados = await connection.execute(
                `SELECT pa.*, pr.nome AS nome_produtor
                FROM produtos_agricolas pa 
                JOIN produtores pr ON pa.produtor_id = pr.id`
            );

            return Response.json(dados[0]);
        }
    },
    async fetch(req) {
        const url = new URL(req.url);
        let { pathname } = url;

        if (pathname == "/") {
            pathname = "/index.html"
        }

        const file = Bun.file("./public" + pathname);

        if (await file.exists()) {
            return new Response(file);
        }

        return new Response(url.pathname, { status: 404 });
    }
})