
const service = require('./service');
const queries = require('./quries');
const bcrypt = require('bcrypt');


const getCustomer = async (req, res, next) => {
    try {
        const data = await queries.getCustomer(req.body);
        return res.status(200).json(data);
    } catch (err) {

        return res.status(404).json({
            status: 404
        });
    }
};

const searchCustomer = async (req, res, next) => {
    try {
        const data = await queries.searchCustomer(req.body.search);
        console.log('data', data)
        return res.status(200).json(data);
    } catch (err) {

        return res.status(404).json({
            status: 404
        });
    }
};

const getSingleCustomer = async (req, res, next) => {
    try {
        const data = await queries.getSingleCustomer(req.body.id);
        console.log('data', data)
        if (data.length === 0) return res.status(401).json({ message: "User not found" });
        return res.status(200).json(data[0]);
    } catch (err) {

        return res.status(404).json({
            status: 404
        });
    }
};

const updateCustomer = async (req, res, next) => {
    try {
        const data = await queries.updateCustomer(req.body);
        console.log('data', data)
        if (data.length > 0) {
            return res.status(200).json({ status: 200, id: data[0].id });
        } else {
            return res.status(500).json({ status: 500, message: 'No data found' });
        }
    } catch (err) {
        console.log('err', err)
        return res.status(404).json({
            status: 404
        });
    }
};

const deleteCustomer = async (req, res, next) => {
    try {
        const data = await queries.deleteCustomer(req.body.id);
        console.log('data', data)
        if (data.length > 0) {
            return res.status(200).json({ status: 200, id: data[0].id });
        } else {
            return res.status(500).json({ status: 500, message: 'No data found' });
        }
    } catch (err) {
        console.log('err', err)
        return res.status(404).json({
            status: 404
        });
    }
};

const addCustomer = async (req, res, next) => {
    try {
        const body = await service.addCustomer(req.body);
        const data = await queries.addCustomer(body);
        if (data.length > 0) {
            return res.status(200).json({ status: 200, id: data[0].id });
        } else {
            return res.status(500).json({ status: 500, message: 'No data found' });
        }
    } catch (err) {
        return res.status(404).json({
            status: 404,
            err: err
        });
    }
};

module.exports = {
    getCustomer,
    addCustomer,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer,
    searchCustomer,
};
