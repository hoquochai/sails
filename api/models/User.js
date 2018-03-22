//Model User

module.exports = {
    attributes: {
        id: {
            type: 'integer',
            unique: true,
            primaryKey: true
        },
        email: {
            type: 'string',
            size: 100,
            unique: true
        },
        password: {
            type: 'string',
            size: 64
        }
    }
};