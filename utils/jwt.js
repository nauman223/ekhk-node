const jwt = require('jsonwebtoken');

//Generate an access token and a refresh token for this database user
function jwtTokens(user) { 
    delete user.password;
    const accessToken = jwt.sign(user, 'XYZ', { expiresIn: '1d' });
    return ({ accessToken });
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']; //Bearer TOKEN
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).json({ error: "Token expired" });
    jwt.verify(token, 'XYZ', (error, user) => {
        if (error) return res.status(403).json({ error: error.message });
        req.user = user;
        next();
    });
}

module.exports = {
    jwtTokens,
    authenticateToken
};
