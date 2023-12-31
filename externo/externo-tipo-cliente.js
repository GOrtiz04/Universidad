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
            'url': 'http://localhost:3000/tipoClientes/find/id',
            //'url': `http://localhost:3000/tipoClientes/find/id/${id}`,
            'headers': {
                'Content-Type': 'application/json'
            },
            data: { id: id }
        };
        try {
            const result = await axios(options);
            const resultado = result.data;
            const mensaje = "Se buscó el tipo de cliente: " + resultado.nombre + " con el id: " + resultado.id;
            res.status(200).send(mensaje);
        } catch (e) {
            console.log(e);
            res.status(e.response.status).send(e.response.data.error);
        }
    },

    async create(req, res) {
        let nombre = req.body.nombre;
        let descuento = req.body.descuento;
        //let id = req.params.id;
        const options = {
            'method': 'POST',
            'url': 'http://localhost:3000/tipoClientes/create',
            //'url': `http://localhost:3000/tipoClientes/find/id/${id}`,
            'headers': {
                'Content-Type': 'application/json'
            },
            data: { 
                nombre: nombre,
                descuento: descuento,
                estado: 1 
            }
        };
        try {
            const result = await axios(options);
            const resultado = result.data;
            const mensaje = "Se creo el tipo de cliente: " + resultado.nombre + " con el descuento: " + resultado.descuento;
            res.status(200).send(mensaje);
        } catch (e) {
            console.log(e);
            res.status(e.response.status).send(e.response.data.error);
        }
    },

    async update(req, res) {
        let nombre = req.body.nombre;
        let descuento = req.body.descuento;
        let estado = req.body.estado;
        let id = req.body.id;
        const options = {
            'method': 'PUT',
            'url': 'http://localhost:3000/clientes/updateTipo',
            //'url': `http://localhost:3000/tipoClientes/find/id/${id}`,
            'headers': {
                'Content-Type': 'application/json'
            },
            data: { 
                nombre: nombre,
                descuento: descuento,
                estado: estado, 
                id: id
            }
        };
        try {
            const result = await axios(options);
            const resultado = result.data;
            const mensaje = "Se actualizo el tipo de cliente";
            res.status(200).send(mensaje);
        } catch (e) {
            console.log(e);
            res.status(e.response.status).send(e.response.data.error);
        }
    },
};

