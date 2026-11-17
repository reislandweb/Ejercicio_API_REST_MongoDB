const mongoose = require('mongoose');
require('../config/db_mongo');

const objetcSchema = {
    company_name: {
        type:String,
        required: true,
        unique: true
    },
    CIF: {
        type:String,
        required: true,
        unique: true
    },
    address: {
        type:String,
        required: true,
    },
    url_web: {
        type: String,
        required: true,
        validate: {
            validator: function(url) {
                if(url.indexOf('http') != -1) return true;
                else { return  false };
            },
            message:"Porfavor, introduce una URL valida"
        }
    }
}

const providerSchema = mongoose.Schema(objetcSchema);
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;

/* // Insertar un proveedor
const p = new Provider({
    "company_name": "Teatro Marquina",
    "CIF": "B40236882",
    "address": "Calle de Prim 11",
    "url_web":"https://www.tortillasmarquina.com"
});

// Guardar en la BBDD
p.save()
.then((data)=>console.log(data))
.catch(err=>console.log(err)) */