const express = require('express');
const router = express.Router();
const controller = require('../controllers/habitacion34.controller');
// Ruta principal: muestra listado de carros, mostrar formulario y procesar formulario para guardar carro.
router.get('/', controller.index);
router.get('/create', controller.createForm);
router.post('/create', controller.create);
//buscar un carro por ID.
router.get('/show', controller.show);      
router.get('/show/:id', controller.show);   

module.exports = router;
