const server = require("./src/app");

const { conn } = require("./src/db");

const port = process.env.PORT ?? 3000;

conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
});
