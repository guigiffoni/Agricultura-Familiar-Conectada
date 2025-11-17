import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: 'mysql_db',
    user: 'root',
    password: '1234',
    database: 'agrofamlink',
    charset: "utf8mb4"
})

const server = Bun.serve({
    port: 80,
    routes: {
        "/": async () => {
            const file = Bun.file("./public/pages/index.html");

            return new Response(file);
        },
        "/produtos/*": async () => {
            return new Response(Bun.file("./public/pages/products.html"));
        },
        "/api/produtos": async () => {
            let dados = await connection.execute(
                `SELECT pd.*, pdr.nome AS nome_produtor
                FROM produto pd
                JOIN produtor pdr ON pd.produtor_id = pdr.id`
            );

            return Response.json(dados[0]);
        },
        "/api/produtos/:categoria": async (req) => {
            let dados = await connection.execute(
                `SELECT pd.*, pdr.nome AS nome_produtor
                FROM produto pd 
                JOIN produtor pdr ON pd.produtor_id = pdr.id
                WHERE categoria = "${req.params.categoria}"`
            );

            return Response.json(dados[0]);
        },
        "/api/produtos/": async (req) => {
            const url = new URL(req.url);

            let dados = await connection.execute(
                `SELECT pd.*, pdr.nome AS nome_produtor
                FROM produto AS pd
                JOIN produtor AS pdr ON pd.produtor_id = pdr.id
                WHERE 
                    pd.titulo LIKE '%${url.searchParams.get('q')}%' OR
                    pd.descricao LIKE '%${url.searchParams.get('q')}%'`,
            );

            console.log(url.searchParams.get('q'))

            return Response.json(dados[0]);
        }
    },
    async fetch(req) {
        const url = new URL(req.url);
        let { pathname } = url;

        const file = Bun.file("./public/" + pathname);

        if (await file.exists()) {
            return new Response(file);
        }

        return new Response("Not Found", { status: 404 });
    }
})