
const service = require('./service');
const queries = require('./quries');
const bcrypt = require('bcrypt');


const getTransection = async (req, res, next) => {
    try {
        const data = await queries.getTransection(req.body);
        return res.status(200).json(data);
    } catch (err) {

        return res.status(404).json({
            status: 404
        });
    }
};

const searchTransection = async (req, res, next) => {
    try {
        const data = await queries.searchTransection(req.body.search);
        console.log('data', data)
        return res.status(200).json(data);
    } catch (err) {

        return res.status(404).json({
            status: 404
        });
    }
};

const getSingleTransection = async (req, res, next) => {
    try {
        const data = await queries.getSingleTransection(req.body.id);
        console.log('data', data)
        if (data.length === 0) return res.status(401).json({ message: "User not found" });
        return res.status(200).json(data[0]);
    } catch (err) {

        return res.status(404).json({
            status: 404
        });
    }
};

const updateTransection = async (req, res, next) => {
    try {
        const data = await queries.updateTransection(req.body);
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

const deleteTransection = async (req, res, next) => {
    try {
        const data = await queries.deleteTransection(req.body.id);
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

const addTransection = async (req, res, next) => {
    try {
        const body = await service.addTransection(req.body);
        const data = await queries.addTransection(body);
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
    getTransection,
    addTransection,
    getSingleTransection,
    updateTransection,
    deleteTransection,
    searchTransection,
};
