
const addCustomer = async (body) => {
    let data = {
        "name": body.name ? body.name : null,
        "phone": body.phone ? body.phone : null,
        "get_or_gave": body.get_or_gave ? body.get_or_gave : 'none',
        "balance": body.balance ? body.balance : null,
        "gender": body.gender ? body.gender :null,
        "description": body.description ? body.description : 'none',
        "image": body.image ? body.image : 'https://via.placeholder.com/350x350?text=Image+Not+Uploaded'
    }
    console.log('data :>> ', data);
    return data;
};




module.exports = {
    addCustomer,
};
