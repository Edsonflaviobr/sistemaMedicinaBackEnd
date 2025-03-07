const mysql = require("mysql2/promise");
require("dotenv").config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

// Testar a conexão logo após a criação da pool
connection.getConnection()
  .then((conn) => {
    console.log("Conexão com o banco de dados estabelecida!");
    conn.release(); // Liberar a conexão de volta para o pool
  })
  .catch((err) => {
    console.error("Erro ao conectar com o banco de dados: ", err.message);
  });

module.exports = connection;
