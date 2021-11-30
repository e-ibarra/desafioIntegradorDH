let db = require("../src/database/models");
//const { Op } = require("sequelize");
const Op =db.Sequelize.Op;


let cancionesController = {
    list: (req, res) => {
        db.Cancion.findAll()
        .then(function(canciones){
           // console.log(canciones);
             return res.json({
                canciones
                
            });
        })
        
        
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: "la concha de tu madre esta poronga no funciona"
            });
        }); 
    },

     store: (req, res) => {
         
        db.Cancion
        .create(req.body,{include: ["genero","album", "artista"]})
        
        .then(function(cancion){
             return res.status(200).json({
                data: cancion,
                status: 200,
                created : 'ok'
            })
            
        })
        
        .catch(function(error){
            return res.status(500).json({
                error: error,
                status: "que pija esto q no funciona, no?"
            });
        });
    },

    show: (req, res) => {
        db.Cancion.findByPk(req.params.id, {include: ["genero","artista"]})
        .then(function(cancion){
            return res.status(200).json({
                data: cancion,
                status: 200
            });
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
             .then((response)=>{
                 return res.json(response)
             })
             .catch(function(error){
                return res.status(500).json({
                    error: error,
                    status: 500
                });
            }); 
         
     }
     /* search : (req, res) => {
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

  /*   save: (req, res) => {
        db.Cancion.create({
            .create(req.body)
            .then(cancion =>{
                return res.status(200).json({
                    data: cancion,
                    status: 200,
                    created: 'ok'
                })
            })
        })
        res.redirect("/canciones");
    }, */
    
   /*  edit: (req, res) => {
        let cancionEdit = db.Cancion.findByPk(req.params.id, {include: ["genero", "album", "artista"]})
        let generosEdit = db.Genero.findAll();
        Promise.all([cancionEdit, generosEdit])
        .then(function([cancion, generos]){
            return res.render("canciones/edit", {cancion: cancion, generos: generos});
        }

        )}, */
    /* update: (req, res) => { 
        db.Cancion.update({
            id: req.body.id,
            titulo: req.body.id,
            duracion: req.body.duracion,
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            genero_id: req.body.genero_id,
            album_id: req.body.album_id,
            artista_id: req.body.artista_id,
        },{
            where: {id: req.params.id}
        })
        res.redirect("/canciones/" + req.params.id);
    }, */

   
        
    

module.exports = cancionesController;