export const errorHandling = (err, req, res, next) => {
    if (err) {
        const status = err.status || 500;
        res.status(status).json({
            status: status,
            err: 'An error occurred. Please try again later.'
        });
    }
    console.log("Error handling");
    next();
}
