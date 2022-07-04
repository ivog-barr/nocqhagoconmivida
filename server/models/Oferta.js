module.exports = (sequelize, DataTypes) => {
    const Oferta = sequelize.define("Oferta", {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_usuario: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:"Usuario xd"
      },
      estado:{
          type:DataTypes.BOOLEAN,
          allowNull:false,
          defaultValue:true
      }
    });
  
    return Oferta;
  };
  