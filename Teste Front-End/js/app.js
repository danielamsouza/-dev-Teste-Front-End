let alunos = [];
let cursos = [];
let turmas = [];

function redenrizarTabela(){
    let corpoTabela = document.getElementById("corpo-tabela");
    corpoTabela.innerHTML = "";

    alunos.forEach(function(aluno){
        let cursoAluno = cursos.find(function(curso){
            return curso.id === aluno.degreeId;
        });
        let turmaAluno = turmas[aluno.classId - 1];

        let linhaTabela = `
            <tr>
                <td>${aluno.name}</td>
                <td>${cursoAluno ? cursoAluno.name : 'Sem curso'}</td>
                <td>${turmaAluno ? turmaAluno.name : 'Sem turma'}</td>
            </tr>
        `;
        corpoTabela.innerHTML += linhaTabela;
    });
}

async function buscarDadosAlunos(){
    try{
        let reStudents = await fetch("./data/students.json");
        let reDegrees = await fetch("./data/degrees.json");
        let reClasses = await fetch("./data/classes.json");
        
        alunos = await reStudents.json();
        cursos = await reDegrees.json();

        let dadosTurmas = await reClasses.json();
        turmas = dadosTurmas.classes;

        console.log("Dados carregados com sucesso!!");

        redenrizarTabela();
    } catch (erro){
        console.error('Erro em buscar os dados:', erro);
    }
}

buscarDadosAlunos();