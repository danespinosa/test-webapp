const fetch = require('node-fetch').default;

module.exports = async function (context, req) {
    const user = req.body || {};
    const roles = ["authenticated"];

    context.res.json({
        roles
    });
}