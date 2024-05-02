const Aluno = require('./aluno');
const users = require('./user');
const Login = require('./login')

module.exports = (app) => {
    Aluno(app)
    users(app)
    Login(app)
}