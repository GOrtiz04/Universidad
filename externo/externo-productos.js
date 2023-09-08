'use strict'
const Sequelize     = require('sequelize');
const db = require("../models");
const moment = require('moment');
const axios = require('axios')

module.exports = {
    async findId(req, res) {
        let id = req.body.id;
        //let id = req.params.id;
        const options = {
            'method': 'GET',
            'url': 'http://localhost:3000/productos/find/id',
            //'url': `http://localhost:3000/tipoClientes/find/id/${id}`,
            'headers': {
                'Content-Type': 'application/json'
            },
            data: { id: id }
        };
        try {
            const result = await axios(options);
            const resultado = result.data;
            const mensaje = "Se buscó el producto" + resultado.nombre;
            res.status(200).send(mensaje);
        } catch (e) {
            console.log(e);
            res.status(e.response.status).send(e.response.data.error);
        }
    },

    async create(req, res) {
        let nombres = req.body.nombres;
        let apellidos = req.body.apellidos;
        let nit = req.body.nit;
        let num_celular = req.body.num_celular;
        let correo = req.body.correo;
        let id_tipo_cliente = req.body.id_tipo_cliente;
        //let id = req.params.id;
        const options = {
            'method': 'POST',
            'url': 'http://localhost:3000/clientes/create',
            //'url': `http://localhost:3000/tipoClientes/find/id/${id}`,
            'headers': {
                'Content-Type': 'application/json'
            },
            data: { 
                nombres: nombres,
                apellidos: apellidos,
                nit: nit,
                num_celular: num_celular,
                correo: correo,
                id_tipo_cliente: id_tipo_cliente,
                estado: 1 
            }
        };
        try {
            const result = await axios(options);
            const resultado = result.data;
            const mensaje = "Se creo el cliente: " + resultado.nombres + " " + resultado.apellidos;
            res.status(200).send(mensaje);
        } catch (e) {
            console.log(e);
            res.status(e.response.status).send(e.response.data.error);
        }
    },

    async update(req, res) {
        let nombres = req.body.nombres;
        let apellidos = req.body.apellidos;
        let nit = req.body.nit;
        let num_celular = req.body.num_celular;
        let correo = req.body.correo;
        let id_tipo_cliente = req.body.id_tipo_cliente;
        let id = req.body.id;
        const options = {
            'method': 'PUT',
            'url': 'http://localhost:3000/clientes/update',
            //'url': `http://localhost:3000/tipoClientes/find/id/${id}`,
            'headers': {
                'Content-Type': 'application/json'
            },
            data: { 
                nombres: nombres,
                apellidos: apellidos,
                nit: nit,
                num_celular: num_celular,
                correo: correo,
                id_tipo_cliente: id_tipo_cliente,
                id: id
            }
        };
        try {
            const result = await axios(options);
            const resultado = result.data;
            const mensaje = "Se actualizo el cliente";
            res.status(200).send(mensaje);
        } catch (e) {
            console.log(e);
            res.status(e.response.status).send(e.response.data.error);
        }
    },
};

