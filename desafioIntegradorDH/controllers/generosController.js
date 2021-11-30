let db = require("../src/database/models");
//const { Op } = require("sequelize");
const Op =db.Sequelize.Op;

let generosController = {
    list: (req, res) => {
        db.Genero.findAll()
        .then(function(generos){
           // console.log(canciones);
             return res.status(200).json({
                total: generos.length,
                data: generos,
                status: "200"
            });
        })
        
        
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: "la concha de tu madre esta poronga no funciona"
            });
        }); 
    }
    
};

module.exports = generosController;