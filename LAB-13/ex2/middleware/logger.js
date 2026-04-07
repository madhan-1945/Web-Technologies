
module.exports = (req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`[GLOBAL LOGGER] ${req.method} ${req.url} - ${time}`);
    next();
};
