var mongoose = require('mongoose');

var CandidatoSchema = new mongoose.Schema(
    {
        partido: {
            type: String,
            minlength: 5,
            required: true,
            unique: true
        },
        lista: {
            type: Number,
            min: 1900,
            max: 2030
        },
        gobernador: {
            type: String
        },
        diputado: {
            type: String
        },
        imagen: {
            type: String
        },
        votos: {
            type: Number,

        }
    }
);

/*var Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;*/

var Candidato = mongoose.model("Candidato", CandidatoSchema);
module.exports = Candidato;