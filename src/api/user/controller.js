
const service = require('./service');
const queries = require('./quries');
const bcrypt = require('bcrypt');
const { jwtTokens } = require('../../../utils/jwt');
// import bcrypt from 'bcrypt';  

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log('req.body', req.body)
        const users = await queries.login(email);
        console.log('users', users)
        if (users.length === 0) return res.status(401).json({ error: "Email is incorrect" });
        //PASSWORD CHECK
        const validPassword = await bcrypt.compare(password, users[0].password);
        console.log('validPassword', validPassword)
        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });
        //JWT
        let tokens = jwtTokens(users[0]);//Gets access and refresh tokens
        console.log('tokens', tokens)
        // res.cookie('refresh_token', tokens.refreshToken, { ...(process.env.COOKIE_DOMAIN && { domain: process.env.COOKIE_DOMAIN }), httpOnly: true, sameSite: 'none', secure: true });
        res.json(tokens);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

const getUsers = async (req, res, next) => {
    try {
        const data = await queries.getUsers(req.body);
        return res.status(200).json(data);
    } catch (err) {

        return res.status(404).json({
            status: 404
        });
    }
};

const searchUser = async (req, res, next) => {
    try {
        const data = await queries.searchUser(req.body.search);
        console.log('data', data)
        return res.status(200).json(data);
    } catch (err) {

        return res.status(404).json({
            status: 404
        });
    }
};

const getUser = async (req, res, next) => {
    try {
        const data = await queries.getUser(req.body.id);
        console.log('data', data)
        if (data.length === 0) return res.status(401).json({ message: "User not found" });
        return res.status(200).json(data[0]);
    } catch (err) {

        return res.status(404).json({
            status: 404
        });
    }
};

const updateUser = async (req, res, next) => {
    try {
        const data = await queries.updateUser(req.body);
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

const deleteUser = async (req, res, next) => {
    try {
        const data = await queries.deleteUser(req.body.id);
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

const addUser = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body['password'] = hashedPassword;
        const body = await service.addUser(req.body);
        const data = await queries.addUser(body);
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
    login,
    getUsers,
    addUser,
    getUser,
    updateUser,
    deleteUser,
    searchUser,
};
