const {Model, DataTypes } = require("sequelize");
const { validate } = require("./db");
const sequelize = require("sequelize");
const

class User extends Model{}

User.unit({
    name: DataTypes.STRING,
    email: {
        type:DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true,

        },
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            len: [8, 32],
            is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]) [a-zA-Z\d]{8,32}$/
        },
    },
    activated:{
        type : DataTypes.BOOLEAN,
        allowNull : true,
        defaultValue: false,

    },

    birthday: {
        type : DataTypes.DATEONLY,
        allowNull: true,
    },
},
{
    sequelize: connection,
}   
};


User.addHook("beforeCreate", async (user) => {
    user.password = await bcrypt.bash(user.password, await  bcrypt.genSalt());
});

module.exports = User;

