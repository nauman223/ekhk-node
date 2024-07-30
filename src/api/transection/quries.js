const knex = require('../../config/knex_db');



const getTransection = async (data) => {
    console.log('data :>> ', data);
    const result = await knex('transection').where({ cid: data.cid, uid: data.uid, is_deleted: false });
    // .paginate(page)
    return result;
};

const getSingleTransection = (id) => {
    return knex.select().from('transection').where({ id: id, is_deleted: false })
};


const searchTransection = (search) => {
    return knex.select().from('transection')
        .whereILike('name', `%${search}%`)
        .orWhereILike('phone', `%${search}%`)
        .orWhereILike('description', `%${search}%`)
        .where({ is_deleted: false })
};

const updateTransection = (user) => {
    if (user.is_deleted === true) {
        return null
    }
    const data = knex('transection')
        .where({ id: user.id })
        .update({
            "name": user.name,
            "phone": user.phone,
            "description": user.description,
            "gender": user.gender,
            "image": user.image,
            "is_transection": user.is_transection,
            "is_deleted": false
        }).returning('id').then(function (res) {
            return res;
        });
    return data;
};

const deleteTransection = (id) => {
    const data = knex('transection')
        .where({ id: id })
        .update({
            "is_deleted": true
        }).returning('id').then(function (res) {
            return res;
        });
    return data;
};

const addTransection = (user) => {
    const data = knex('transection')
        .insert(user).returning('image').then(function (res) {
            console.log('res :>> ', res);
            return res;
        }, error = (error) => {
            console.error(error)
        });

    return data;
};


module.exports = {
    getTransection,
    addTransection,
    getSingleTransection,
    updateTransection,
    deleteTransection,
    searchTransection
};
