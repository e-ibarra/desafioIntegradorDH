let db = require("../src/database/models");
//const { Op } = require("sequelize");
const Op =db.Sequelize.Op;

module.exports ={

    list: (req, res) => {
        db.Genero.findAll( {include: ["canciones"]} )
        .then(function(generos){
           
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
    
}

