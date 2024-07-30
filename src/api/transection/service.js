
const addTransection = async (body) => {
    let data = {
        "note": body.note ? body.note : null,
        "price": body.price ? body.price : null,
        "date": body.date ? body.date :null,
        "is_get": body.is_get ? body.is_get :false,
        "bid": body.bid ? body.bid : 'none',
        "image": body.image ? body.image : 'https://via.placeholder.com/350x350?text=Image+Not+Uploaded',
        "uid": body.uid ? body.uid :null,
        "cid": body.cid ? body.cid :null,
    }
    console.log('data :>> ', data);
    return data;
};




module.exports = {
    addTransection,
};
