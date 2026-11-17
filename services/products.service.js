const Product = require('../models/products.model');
const Provider = require('../models/provider.model');

const getAllProducts = async () => {
    // Usamos .populate('provider') para traer el objeto completo del proveedor en lugar del ID
    return await Product.find().populate('provider');
};

const createProduct = async (productData) => {
    // Siguiendo el enunciado: Primero buscamos al proveedor para obtener su _id
    // Suponemos que el body puede enviar el 'company_name' o directamente el 'provider' (ObjectId)
    let providerId = productData.provider;

    if (productData.company_name) {
        const foundProvider = await Provider.findOne({ company_name: productData.company_name });
        if (!foundProvider) {
            throw new Error("No se puede crear el producto: El proveedor especificado no existe.");
        }
        providerId = foundProvider._id;
    }

    const newProduct = new Product({
        title: productData.title,
        price: productData.price,
        description: productData.description,
        provider: providerId
    });

    const savedProduct = await newProduct.save();
    // Opcional: devolvemos populado para que el JSON muestre el proveedor completo si se desea
    return await savedProduct.populate('provider');
};

const updateProduct = async (title, updateData) => {
    return await Product.findOneAndUpdate({ title }, updateData, { new: true }).populate('provider');
};

const deleteProductByTitle = async (title) => {
    const deleted = await Product.findOneAndDelete({ title });
    if (!deleted) throw new Error("Producto no encontrado para borrar");
    return deleted;
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProductByTitle
};