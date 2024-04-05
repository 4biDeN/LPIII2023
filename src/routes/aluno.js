const alunoController = require ('../controllers/aluno');

module.exports = (app) => {
    app.get('/aluno', alunoController.getAluno
    /*
        #swagger.tags = ["Alunos"]
        
        #swagger.summary = "Consulta lista de Alunos"
        
        #swagger.description = 'Consulta lista de Alunos, todos os Alunos cadastrados'
        
        #sawagger.parameters['id'] = {
            description: 'Código do Aluno',
            in: 'query',
            name: 'id',
            type: 'integer',
            value: 1    
        }

        #swagger.responses[200] = { description: 'Sucesso!',
            schema: {
                "total": 1,
                "alunos": [
                    {
                        "id": 1,
                        "nome": "Cristian",
                        "sobrenome": "Mila",
                        "periodo": 4,
                        "obsrevacao": "TaldoTeste"
                    }
                ]
            }
        }
    */    
    )
    app.post('/aluno', alunoController.postAlunos
    /* 
        #swagger.tags = ["Alunos"]
        #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para inserir um novo aluno!',
            type: 'json',
            schema: {
                id: 1,
                nome: "Crisdo",
                sobrenome: "Test",
                periodo: 5,
                observador: "Pai ta ON"
            }
        }
         #swagger.responses[201] = {
            description: 'Criado',
            schema: {
                mensagem: 'Cadastro Incluido com Sucesso!'
            }
        }    
        #swagger.responses[400] = {
            description: 'Bad Request',
            schema: {
                mensagem: 'Campo Faltando!',
                detalhe: 'Os campos nome e periodo são obrigatórios'
            }
        }    
    */
    )
    app.delete('/aluno/:id', alunoController.deleteAlunos
        //#swagger.tags = ["Alunos"]
    )
    app.put('/aluno/:id', alunoController.putAlunos
    /*
        #swagger.tags = ["Alunos"]
        #sawagger.parameters['id'] = {
            description: 'Código do Aluno',
            in: 'path',
            name: 'id',
            type: 'integer',
            value: 2    
        }
    */ 
    )
    app.patch('/aluno/:id', alunoController.patchAlunos
    /*
        #swagger.tags = ["Alunos"]
        
        #sawagger.parameter['id'] = {
            description: 'Código do Aluno',
            in: 'query',
            name: 'id',
            type: 'integer',
            value: 1    
        }
    */
    )
    
}