
module.exports = (req, res, next) => {
    console.log("[ROUTE MIDDLEWARE] Request passed route-level middleware");
    next();
};
