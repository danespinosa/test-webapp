const fetch = require('node-fetch').default;

module.exports = async function (context, req) {
    const user = req.body || {};
    const roles = [];

    context.res.json({
        roles
    });
}