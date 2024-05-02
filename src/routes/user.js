const userController = require('../controllers/user')

module.exports = (app) => {
    app.post('/user', userController.newUser)
    app.get('/user', userController.getUser)
    app.delete('/user/:id', userController.deleteUser)
    app.patch('/user/:id', userController.patchPassword)
}