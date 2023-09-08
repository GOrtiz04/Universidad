const { Router } = require('express');
const router = Router();

// facturas
const facturasController = require('../controllers/cuenta/facturaControler');

//RUTAS

module.exports = (app) => {
    //facturas
    router.get('/factura/find', facturasController.find);
    router.post('/contabilidad/create', facturasController.create);

    app.use('/', router);

};