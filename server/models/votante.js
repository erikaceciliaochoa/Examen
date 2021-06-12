var mongoose = require('mongoose');
/*var bcrypt = require('bcrypt');*/

var UserSchema = new mongoose.Schema(
    {
        dni: {
            type: Number,
            min: 8,
            max: 10
        },
        nombre: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            minlength: 5
        },
        genero: {
            type: String,
            unique: true,
            required: true,
            trim: true
        }
        
        
    }
);

//Suscribo al evento pre... antes de guardar el usuario...
/*UserSchema.pre('save', function(next){
    var user = this;
    bcrypt.hash(user.dni, 10, function(err, hash){
        if (err) {
            return next(err);
        } else {
            user.dni = hash;
            next();
        }
    })
});*/
/*
UserSchema.statics.authenticate = function(dni, callback) {
    User.findOne({ dni: dni}).exec(
        function(err, user){
            if (err) {
                return callback(err);
            } else if (!user) {
                var error = new Error("Usuario no encontrado...");
                error.status = 404;
                return callback(error);
            }

            //Si no tengo error y existe el usuario.. verico la password

            bcrypt.compare(password, user.dni, function(err, result){
                if (result == true) {
                    return callback(null, user);
                } else {
                    var passerror = new Error("Clave ingresada inválida...");
                    passerror.status = 401;
                    return callback(err);
                }
            });
        }
    )
}
*/
var User = mongoose.model("User", UserSchema);
module.exports = User;