module.exports = (sequelize,DataTypes) =>{
    const HourLog = sequelize.define('hourLog',{
        hourWorked: {
            type:  DataTypes.STRING,
            allowNull: false
        },
    day: {
        type:DataTypes.STRING,
        allowNull: false
    },
    customer_id: {
        type: DataTypes.INTEGER
    }


    },{
            
            timestamps: true,
        
       
    });
    return HourLog
}