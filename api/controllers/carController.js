// contactController.js
// Import contact model
const Car = require('../models/carModel');
const path = require('path');
const util = require('util')


// Handle index actions
exports.list = function (req, res) {
    Car.get(function (err, car) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Operation handled successfully",
            data: car
        });
    });
};
// Handle create planning actions
exports.new = function (req, res) {
    var car = new Car();
    car.placa = req.body.placa
    car.marca = req.body.marca
    car.modelo = req.body.modelo
    car.empleado = req.body.empleado
    car.fechaIngreso = req.body.fechaIngreso
    car.fechaSalida = req.body.fechaSalida
    car.descripcion = req.body.descripcion
    car.procedimiento = req.body.procedimiento
    car.estado = req.body.estado

// save the current planning and check for errors

    car.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New car created!',
                data: car
            });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Car.findById(req.params.cars_id, function (err, car) {
        if (err)
            res.send(err);
        res.json({
            message: 'Car planning details loading..',
            data: car
        });
    });
};

// Handle update car info
exports.update = function (req, res) {
    Car.findById(req.params.cars_id, function (err, car) {
        if (err)
            res.send(err);

        car.placa = req.body.placa
        car.marca = req.body.marca
        car.modelo = req.body.modelo
        car.empleado = req.body.empleado
        car.fechaIngreso = req.body.fechaIngreso
        car.fechaSalida = req.body.fechaSalida
        car.descripcion = req.body.descripcion
        car.procedimiento = req.body.procedimiento
        car.estado = req.body.estado
 
// save the contact and check for errors
        car.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Car Info updated',
                data: car
            });
        });
    });
};
// Handle delete car
exports.delete = function (req, res) {
    Car.deleteOne({
        _id: req.params.cars_id
    }, function (err, car) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Car deleted'
        });
    });
};

