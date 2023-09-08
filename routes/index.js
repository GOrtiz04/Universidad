const { Router } = require('express');
const router = Router();

const externo_tipo_clienteController = require('../externo/externo-tipo-cliente');
const externo_clienteController = require('../externo/externo-cliente');
const externo_producto = require('../externo/externo-productos');

//RUTAS

module.exports = (app) => {
    router.get('/tipoClientes/find/id',externo_tipo_clienteController.findId);
    router.post('/tipoClientes/create',externo_tipo_clienteController.create);
    router.put('/tipoClientes/update',externo_tipo_clienteController.update);

    router.get('/clientes/find/id',externo_clienteController.findId);
    router.post('/clientes/create',externo_clienteController.create);
    router.put('/clientes/update',externo_clienteController.update);

    router.get('/productos/find/id',externo_producto.findId);
    router.post('/productos/create',externo_producto.create);
    router.put('/productos/update',externo_producto.update);
    app.use('/', router);

};