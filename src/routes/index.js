const Aluno = require('./aluno');
const users = require('./user');

module.exports = (app) => {
    Aluno(app)
    users(app)
}