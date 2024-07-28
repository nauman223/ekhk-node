const knex = require('../../config/knex_db');



const getCustomer = async (page) => {
    const result = await knex('customer').where({ is_deleted: false });
    // .paginate(page)
    return result;
};

const getSingleCustomer = (id) => {
    return knex.select().from('customer').where({ id: id, is_deleted: false })
};


const searchCustomer = (search) => {
    return knex.select().from('customer')
        .whereILike('name', `%${search}%`)
        .orWhereILike('phone', `%${search}%`)
        .orWhereILike('description', `%${search}%`)
        .where({ is_deleted: false })
};

const updateCustomer = (user) => {
    if (user.is_deleted === true) {
        return null
    }
    const data = knex('customer')
        .where({ id: user.id })
        .update({
            "name": user.name,
            "phone": user.phone,
            "description": user.description,
            "gender": user.gender,
            "image": user.image,
            "is_customer": user.is_customer,
            "is_deleted": false
        }).returning('id').then(function (res) {
            return res;
        });
    return data;
};

const deleteCustomer = (id) => {
    const data = knex('customer')
        .where({ id: id })
        .update({
            "is_deleted": true
        }).returning('id').then(function (res) {
            return res;
        });
    return data;
};
const addCustomer = (user) => {
    const data = knex('customer')
        .insert(user).returning('image').then(function (res) {
            console.log('res :>> ', res);
            return res;
        },error= (error)=>{
            console.error(error)
        });

    return data;
};


module.exports = {
    getCustomer,
    addCustomer,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer,
    searchCustomer
};
