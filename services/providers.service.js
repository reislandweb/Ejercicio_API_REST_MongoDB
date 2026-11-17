const Provider = require('../models/provider.model');
const Product = require('../models/products.model');

const getAllProviders = async () => {
    return await Provider.find();
};

const createProvider = async (providerData) => {
    const newProvider = new Provider(providerData);
    return await newProvider.save();
};

const updateProvider = async (filter, updateData) => {
    // Actualiza buscando por company_name o CIF según te pida el body
    return await Provider.findOneAndUpdate(filter, updateData, { new: true });
};

const deleteProviderByName = async (companyName) => {
    //comprobar si tiene productos antes de borrar
    const provider = await Provider.findOne({ company_name: companyName });
    if (!provider) throw new Error("Proveedor no encontrado");

    const productsCount = await Product.countDocuments({ provider: provider._id });
    if (productsCount > 0) {
        throw new Error("No se puede borrar el proveedor porque tiene productos asociados.");
    }

    return await Provider.findOneAndDelete({ company_name: companyName });
};

module.exports = {
    getAllProviders,
    createProvider,
    updateProvider,
    deleteProviderByName
};