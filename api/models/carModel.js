// carsModel.js
var mongoose = require('mongoose');
// Setup schema
var carSchema = mongoose.Schema({
    
    placa: {
        type: String,
        uppercase: true,
        validate: /[a-zA-Z]{3}[0-9]{3}|[a-zA-Z]{3}[0-9]{2}[a-zA-Z]/,
        required: true
    },

    marca:{type: String, required: true},
    modelo: {type: String, required: true},
    empleado: {type: String,required: true},
    fechaIngreso: {type: String,required: true},
    fechaSalida: {type: String,required: true},
    estado: {type: String,required: true},
    descripcion: {type: String,required: true},
    procedimiento: {type: String,required: true},

    created_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Car = module.exports = mongoose.model('car', carSchema);
module.exports.get = function (callback, limit) {
    Car.find(callback).limit(limit);
}