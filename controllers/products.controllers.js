const productService = require('../services/products.service');

const getProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const postProduct = async (req, res) => {
    try {
        const newProduct = await productService.createProduct(req.body);
        res.status(201).json({
            message: "producto creado",
            product: newProduct
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const putProduct = async (req, res) => {
    try {
        const title = req.body.title;
        const updated = await productService.updateProduct(title, req.body);
        res.status(200).json({
            message: `producto actualizado: ${title}`,
            product: updated
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const title = req.body.title;
        await productService.deleteProductByTitle(title);
        res.status(200).json({
            message: `Se ha borrado el producto: ${title}`
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getProducts,
    postProduct,
    putProduct,
    deleteProduct
};