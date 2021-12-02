let db = require("../src/database/models");
const Cancion = require("../src/database/models/Cancion");
//const { Op } = require("sequelize");
const Op =db.Sequelize.Op;


1
let cancionesController = {
    list: (req, res) => {
        db.Cancion.findAll( {include: ["artista", "genero"]}  )
        .then(function(canciones){
                return res.status(200).json({
                meta: {
                status: "200",
                total: canciones.length,
                url: req.protocol + "://" + req.get("host") + req.originalUrl,
                },
                
                data: canciones,
            });
        })
        
        
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: "we have a problem"
            });
        }); 
     },
     store: (req, res) => {
        
        db.Cancion
        .create(req.body)
        .then(function(cancion){
        return res.status(200).json({
            meta: {
            status: 200,
            created: "ok",
            url: req.protocol + "://" + req.get("host") + req.originalUrl + cancion.id,
        },
            data: cancion,
        });     
          
        })
         .catch(function(error){
              return res.status(500).json({
                created: "error, cancion no creada",
                error: error,
                status: "we have a problem"
            });
        })
        
     }
    ,
     show: (req, res) => {
        db.Cancion.findByPk(req.params.id, {include: ["album","genero","artista"]})
        .then(function(cancion){
            if((!cancion)){
                return res.status(404).json({
                    meta: {
                        status: 404,
                        notfound: "este registro no existe",
                    }
                });

            }else{
            return res.status(200).json({
                meta: {
                    status: 200,
                    url: req.protocol + "://" + req.get("host") + req.originalUrl,
                },
                    data: cancion,
            });}
        })
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: 500
            });
        }); 
     },
     delete: (req, res) => {
         db.Cancion
         .destroy({
             where: { 
                 id: req.params.id
             }
         })
             .then((cancion)=>{
                if(!cancion){
                    return res.status(404).json({
                        meta: {
                            status: 404,
                            notfound: "este registro no existe",
                        }
                    });
                }else{
                return res.status(200).json({
                    meta: {
                        status: 200,
                        deleted: "ok",
                        url: req.protocol + "://" + req.get("host") + req.originalUrl,
                    },
                    data: cancion,
                    status: 200
                })};
             })
             .catch(function(error){
                return res.status(500).json({
                    error: error,
                    status: 500
                });
            }); 
         
        },
        edit: async (req, res) => {
            let id = req.params.id;
            let idToUpdate = await db.Cancion.findByPk(id);
        
            await db.Cancion 
            .update(req.body, {
                where: { 
                    id: req.params.id
                }
                
            })
            .then(function(cancion){
                if(idToUpdate == null){
                    return res.status(404).json({
                        meta: {
                            status: 404,
                            notfound: "este registro no existe",
                        }
                    })
                
                    
           
                .catch(function(error){
                    return res.status(500).json({
                        error: error,
                        status: "oh no!, no funciona",
                        data: cancion
                    });
                },
            );}else{
                return res.status(200).json({
                    status: 200,
                    url: req.protocol + "://" + req.get("host") + req.originalUrl,
                    updated : 'ok',
                    data: cancion,
                })
                .catch(function(error){
                return res.status(500).json({
                    error: error,
                    status: 500
                });
            });
            }
        })
            
     },
/* 
        search : (req, res) => {
         db.Cancion.findAll({
             where: {
                 titulo: { [db.Sequelize.Op.like]: '%' + req.query.keyword + '%' }
             }
         })
         .then(function(canciones){
             return res.status(200).json(canciones);
 
        })
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: 500
            });
        });  
     } */
    

    }
module.exports = cancionesController;