module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define("Usuario", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

 

  return Usuario
};
