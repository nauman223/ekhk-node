
const addUser = async (body) => {
    let data = {
        "full_name": body.full_name ? body.full_name : null,
        "email": body.email ? body.email : null,
        "role": body.role ? body.role :null,
        "gender": body.gender ? body.gender : 'none',
        "password": body.password ? body.password : null,
        "phone": body.phone ? body.phone : null,
        "image": body.image ? body.image : 'https://via.placeholder.com/350x350?text=Image+Not+Uploaded'
    }
    console.log('data :>> ', data);
    return data;
};




module.exports = {
    addUser,
};
