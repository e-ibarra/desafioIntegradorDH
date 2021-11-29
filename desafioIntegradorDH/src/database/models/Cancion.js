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
      
    };
  
    let config = {
      tableName: "canciones",
      timestamps: true,
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