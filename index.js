const express = require('express');
const path = require('path');
const app = express();

const habitacionRouter = require('./routes/habitacion11.router');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));
//Usar router para manejar las rutas de la página
app.use('/', habitacionRouter);
//Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
