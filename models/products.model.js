const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB

const productSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        unique: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Providers",
        required: true
    }
});

module.exports = mongoose.model('Products', productSchema);