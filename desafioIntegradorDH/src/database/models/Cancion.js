module.exports = (sequelize, dataTypes) => {
  let alias = "Cancion";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    titulo: {
      type: dataTypes.STRING,
     
    },
    duracion: {
      type: dataTypes.INTEGER,
      
    },
    album_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    genero_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    artista_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    updated_at: { 
      type: dataTypes.DATE,
      allowNull: false,
    }, 

    
  };

  let config = {
    tableName: "canciones",
    timestamps: false,
    deletedAt: false,
  };

  const Cancion = sequelize.define(alias, cols, config);

  Cancion.associate = models => {
    
     Cancion.belongsTo(models.Album, {
      as: "albumes",
      foreignKey: "album_id",
    });  
    Cancion.belongsTo(models.Artista, {
      as: "artista",
      foreignKey: "artista_id",
    });
    //genero
    Cancion.belongsTo(models.Genero, {
      as: "genero",
      foreignKey: "genero_id",
    }); 
  };

  return Cancion;
};