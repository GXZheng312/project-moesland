const { FindAuthTokenByToken } = require("../repository/authToken");
const { getUserById } = require("../repository/user");
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const validateAuthToken = async (authorizationHeader, roleName) => {
    if (!authorizationHeader) {
        throw new Error('Authorization header is missing');
    }

    const parts = authorizationHeader.split(' ');

    if (parts.length !== 2) {
        throw new Error('Authorization header is invalid');
    }

    if (parts[0] !== 'Bearer') {
        throw new Error('Authorization scheme is not supported');
    }

    const token = authorizationHeader.split(' ')[1];
    const decoded = jwt.verify(token, secretKey);
    const userId = decoded.sub;

    if (!userId || !await getUserById(userId)) {
        throw new Error('User not valid');
    }

    if (!await FindAuthTokenByToken(token)) {
        throw new Error('Token not valid in database.');
    }

    if(roleName) {
        validateRole();

    }
}

const validateRole = async (userId, roleName) => { 
    const user = await getUserById(userId);
    const role = await getRoleById(user.roleId);

    if(!role) {
        throw new Error('Role does not exist');
    }

    if(role.rolename != roleName){
        throw new Error('user not authorized');
    }

}

const authenticateToken = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;

        await validateAuthToken(authorizationHeader);

        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid authorization token', err });
    }
}

const authenticateTokenRole = (roleName) => {
    return async (req, res, next) => {
        try {
            const authorizationHeader = req.headers.authorization;

            await validateAuthToken(authorizationHeader, roleName);

            return next();

        } catch (err) {
            return res.status(401).json({ error: 'Invalid authorization token', err });
        }
    };
}



module.exports = { authenticateToken, authenticateTokenRole };