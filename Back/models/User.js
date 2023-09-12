const {Schema, default: mongoose} = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = Schema({

    name: {
        type: String,
        require: [true, "es Requerido"]
    },

    email: {
        type: String,
        require: [true, "es Requerido"],
        unique: true,
        index: true,
        validate: {
            validator: function(str){
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(str);
            },
            message: props => `${props.value} No es un email valido`
        }
    },

    password: {
        type: String,
        require: [true, "es Requerido"]
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    cart: {
        type: Object,
        default: {
            total: 0,
            count: 0
        }
    },

    Notifications: {
        type: Array,
        default: []
    },

    orders: [{type: Schema.Types.ObjectId, ref: "Order"}]

}, {minimize: false});


const User = mongoose.model("User", UserSchema);

module.exports = User;