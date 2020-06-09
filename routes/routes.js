const express = require('express');
const router = express.Router();
const amortizacionController = require('./controllers/amortizacionController')

module.exports = function() {
    router.get('/datos', amortizacionController.formularioDatos);
    router.post('/amortizacion', amortizacionController.calcularAmortizacion);
    return router;
}