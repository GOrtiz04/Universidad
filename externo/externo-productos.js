'use strict'
const Sequelize     = require('sequelize');
const db = require("../models");
const moment = require('moment');
const axios = require('axios');
const { NOW } = require('sequelize');

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
            const mensaje = "Se buscó el producto " + resultado.nombre;
            res.status(200).send(mensaje);
        } catch (e) {
            console.log(e);
            res.status(e.response.status).send(e.response.data.error);
        }
    },

    async create(req, res) {
        let nombre = req.body.nombre;
        let costo = req.body.costo;
        let precio_venta = req.body.precio_venta;
        //let id = req.params.id;
        const options = {
            'method': 'POST',
            'url': 'http://localhost:3000/productos/create',
            //'url': `http://localhost:3000/tipoClientes/find/id/${id}`,
            'headers': {
                'Content-Type': 'application/json'
            },
            data: { 
                nombre: nombre,
                costo: costo,
                precio_venta: precio_venta,
            }
        };
        try {
            const result = await axios(options);
            const resultado = result.data;
            const mensaje = "Se creo el producto: " + resultado.nombre;
            res.status(200).send(mensaje);
        } catch (e) {
            console.log(e);
            res.status(e.response.status).send(e.response.data.error);
        }
    },

    async update(req, res) {
        let nombre = req.body.nombre;
        let costo = req.body.costo;
        let precio_venta = req.body.precio_venta;
        let estado = req.body.estado;
        let id = req.body.id;
        let existencia = req.body.existencia;
        const options = {
            'method': 'PUT',
            'url': 'http://localhost:3000/productos/update',
            //'url': `http://localhost:3000/tipoClientes/find/id/${id}`,
            'headers': {
                'Content-Type': 'application/json'
            },
            data: { 
                nombre: nombre,
                costo: costo,
                precio_venta: precio_venta,
                estado: estado,
                existencia: existencia,
                updatedAt: NOW(),
                id: id
            }
        };
        try {
            const result = await axios(options);
            const resultado = result.data;
            const mensaje = "Se actualizo el producto";
            res.status(200).send(mensaje);
        } catch (e) {
            console.log(e);
            res.status(e.response.status).send(e.response.data.error);
        }
    },
};

