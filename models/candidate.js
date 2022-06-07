module.exports = (sequelize, DataTypes) => {
    const Candidate = sequelize.define('candidates',{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email : {
            type : DataTypes.STRING,
            allowNull: false
          
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false
        },

    designation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    })

    return Candidate

}