module.exports = (sequelize, DataTypes) => {
    const Invoice = sequelize.define('invoice',{
        rate:{
            type: DataTypes.STRING,
            allowNull: false
        },
        total : {
            type : DataTypes.STRING,
            allowNull: false
          
        },
        hourLog_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        

    });
    return Invoice
}