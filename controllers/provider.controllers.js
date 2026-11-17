const providerService = require('../services/providers.service');

const getProviders = async (req, res) => {
    try {
        const providers = await providerService.getAllProviders();
        res.status(200).json(providers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const postProvider = async (req, res) => {
    try {
        const newProvider = await providerService.createProvider(req.body);
        res.status(201).json({
            message: "proveedor creado",
            provider: newProvider
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const putProvider = async (req, res) => {
    try {
        // Suponiendo que mandas el company_name para identificarlo y el resto para actualizar
        const updated = await providerService.updateProvider({ company_name: req.body.company_name }, req.body);
        res.status(200).json({
            message: `proveedor actualizado: ${req.body.company_name}`,
            provider: updated
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteProvider = async (req, res) => {
    try {
        const companyName = req.body.company_name; // O el campo que pida el enunciado para borrar
        await providerService.deleteProviderByName(companyName);
        res.status(200).json({
            message: `Se ha borrado el proveedor: ${companyName}`
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getProviders,
    postProvider,
    putProvider,
    deleteProvider
};