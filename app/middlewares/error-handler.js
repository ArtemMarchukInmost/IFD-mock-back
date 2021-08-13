module.exports = (err, req, res) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    res.render('error');
};
