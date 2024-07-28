const knex = require('../../config/knex_db');

const login = async (email) => {
    return knex.select().from('users').where({ email: email, is_deleted: false })
};

const getUsers = async (page) => {
    const result = await knex('users').where({ is_deleted: false }).paginate(page);
    return result;
};

const getUser = (id) => {
    return knex.select().from('users').where({ id: id, is_deleted: false })
};


const searchUser = (search) => {
    return knex.select().from('users')
        .whereILike('first_name', `%${search}%`)
        .orWhereILike('last_name', `%${search}%`)
        .orWhereILike('email', `%${search}%`)
        .orWhereILike('company_name', `%${search}%`)
        .where({ is_deleted: false })
};

const updateUser = (user) => {
    if (user.is_deleted === true) {
        return null
    }
    const data = knex('users')
        .where({ id: user.id })
        .update({
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "type": user.type,
            "gender": user.gender,
            "username": user.username,
            "password": user.password,
            "status": user.status,
            "phone": user.phone,
            "image": user.image,
            "city": user.city,
            "state": user.state,
            "country": user.country,
            "company_name": user.company_name,
            "postel_code": user.postel_code,
            "is_deleted": false
        }).returning('id').then(function (res) {
            return res;
        });
    return data;
};

const deleteUser = (id) => {
    const data = knex('users')
        .where({ id: id })
        .update({
            "is_deleted": true
        }).returning('id').then(function (res) {
            return res;
        });
    return data;
};
const addUser = (user) => {
    const data = knex('users')
        .insert(user).returning('image').then(function (res) {
            console.log('res :>> ', res);
            return res;
        },error= (error)=>{
            console.error(error)
        });

    return data;
};


module.exports = {
    login,
    getUsers,
    addUser,
    getUser,
    updateUser,
    deleteUser,
    searchUser
};
