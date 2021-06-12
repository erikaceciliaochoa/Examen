var express = require('express');
const Candidato = require('../models/candidatos');
var router = express.Router();


/* GET Candidatos */
router.get('/', function(req, res, next){
    var filterObj = {};
    var filter = req.query ? req.query.filter : null;
    if (filter) {
        /*filterObj = { partido: {'$regex': filter} }*/
        filterObj = { partido: filter } 
    }
    Candidato.find(filterObj, function(err, candidatos){
        if (err != null) {
            res.status(400).send(new Error("Error: " + err.message));
        }
        if (candidatos == null) {
            res.status(404).send(new Error("No hay candidatos"));
        }

        res.render('estadisticas', { title: 'Listado de candidatos...', candidatos: candidatos});
    })

});

module.exports = router;