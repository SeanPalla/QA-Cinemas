function isAuthenticated(request, response, next) {
    if (request.isAuthenticated()) return next();
    response.redirect("/login");
    // return response.status(400).send('Not logged in.');
}

module.exports = {
    isAuthenticated
}