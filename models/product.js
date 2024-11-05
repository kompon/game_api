const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
    proid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    proname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT,
    },
    authors: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
    },
}, {
    tableName: 'products',
    timestamps: false,
});

module.exports = Product;
