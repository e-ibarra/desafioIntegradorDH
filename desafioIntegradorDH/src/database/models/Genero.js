module.exports = (sequelize, dataTypes) => {
  let alias = "Genero";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING,
     
    },
  };

  let config = {
    tableName: "generos",
    timestamps: false,
    deletedAt: false,
  };

  const Genero = sequelize.define(alias, cols, config);

  Genero.associate = models => {
    
    Genero.hasOne(models.Cancion, {
      as: "canciones",
      foreignKey: "genero_id",
    });
  };

  return Genero;
};