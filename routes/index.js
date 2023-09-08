const { Router } = require('express');
const router = Router();

// facturas
const facturasController = require('../controllers/cuenta/facturaControler');
const externo_tipo_clienteController = require('../externo/externo-tipo-cliente');

//RUTAS

module.exports = (app) => {
    //facturas
    router.get('/factura/find', facturasController.find);
    router.post('/contabilidad/create', facturasController.create);
    router.get('/tipoClientes/find/id',externo_tipo_clienteController.findId);
    router.post('/tipoClientes/create',externo_tipo_clienteController.create);
    router.put('/tipoClientes/update',externo_tipo_clienteController.update);
    app.use('/', router);

};