module.exports = (sequelize, DataTypes) => sequelize.define('request', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  regno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  printed: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
  letterType: {
    type: DataTypes.ENUM,
    values: [
      'bank',
      'student',
      'counciltax'
    ],
    allowNull: false,
  },
  error: DataTypes.BOOLEAN,
  errorText: DataTypes.STRING
})
