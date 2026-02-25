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
};

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
        preencherFiltros();
    } catch (erro){
        console.error('Erro em buscar os dados:', erro);
    }
};

function preencherFiltros(){
    let selectCurso = document.getElementById("filtro-curso");
    let selectTurma = document.getElementById("filtro-turma");

    cursos.forEach(function(curso){
        let opcao = `<option value="${curso.id}">${curso.name}</option>`;
        selectCurso.innerHTML += opcao;
    });

    turmas.forEach(function(turma, posicao){
        let idTurma = posicao + 1;

        let opcao = `<option value="${idTurma}">${turma.name}</option>`;
        selectTurma.innerHTML += opcao;
    });
};

buscarDadosAlunos();
