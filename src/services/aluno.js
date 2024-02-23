const getAluno = async (params) => {
    let aluno = {}
    if (params.name === "Cristian"){
        aluno.id = 1
        aluno.nome = "Cristian"
        aluno.sobrenome = "Müller"
        aluno.notas = []
        aluno.notas.push(10)
        aluno.notas.push(9)
    } else {
        throw "Aluno não Cadastrado!"
    }
    return aluno
}

module.exports.getAluno = getAluno