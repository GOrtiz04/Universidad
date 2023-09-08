const { Router } = require('express');
const router = Router();

const externo_tipo_clienteController = require('../externo/externo-tipo-cliente');
const externo_clienteController = require('../externo/externo-cliente');

//RUTAS

module.exports = (app) => {
    router.get('/tipoClientes/find/id',externo_tipo_clienteController.findId);
    router.post('/tipoClientes/create',externo_tipo_clienteController.create);
    router.put('/tipoClientes/update',externo_tipo_clienteController.update);

    router.get('/clientes/find/id',externo_clienteController.findId);
    router.post('/clientes/create',externo_clienteController.create);
    router.put('/clientes/update',externo_clienteController.update);
    app.use('/', router);

};