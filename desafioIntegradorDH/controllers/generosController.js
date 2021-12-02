let db = require("../src/database/models");
//const { Op } = require("sequelize");
const Op =db.Sequelize.Op;

module.exports ={

    list: (req, res) => {
        db.Genero.findAll( {include: ["canciones"]} )
        .then(function(generos){
           
             return res.status(200).json({
                meta:{
                total: generos.length,
                status: "200",
                url: req.protocol + "://" + req.get("host") + req.originalUrl,
                },
                data: generos
            });
        })

        
        
        
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: "500",
            });
        }); 
    }
    
}

