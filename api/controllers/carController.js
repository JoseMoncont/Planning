// contactController.js
// Import contact model
const Car = require('../models/carModel');
const path = require('path');
const util = require('util')
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs')

const upload = multer({ dest: 'tmp/csv/' });


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
    Car.findById(req.params.car_id, function (err, car) {
        if (err)
            res.send(err);
        res.json({
            message: 'Car planning details loading..',
            data: car
        });
    });
};

exports.view_plate = function (req, res) {
    let args = [
        { $match: { placa: req.params.plate}}
    ]
    Car.aggregate(args, function (err, car_jobs) {
        if (err)
            res.send(err);
        res.json({
            message: 'Car planning details loading..',
            data: car_jobs
        });
    });
};


// Handle update car info
exports.update = function (req, res) {
    Car.findById(req.params.car_id, function (err, car) {
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
        _id: req.params.car_id
    }, function (err, car) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Car deleted'
        });
    });
};

exports.upload_csv = function (req, res) {
    var cars = []
    fs.createReadStream('./planning.csv')
        .pipe(csv( {skipLines: 2}))
        .on('data', (row) => {
            cars.push(row)
        })
        .on('end', () => {
            console.log(cars);
        });
    
};
