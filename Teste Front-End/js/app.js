let alunos = [];
let cursos = [];
let turmas = [];

function redenrizarTabela(){
    let corpoTabela = document.getElementById("corpo-tabela");
    corpoTabela.innerHTML = "";

    alunos.forEach(aluno => {
        let cursoAluno = cursos.find(curso => curso.id == aluno.degreeID)
    })
}

async function buscarDadosAlunos(){
    try{
        let reStudents = await fetch("./data/students.json");
        let reDegrees = await fetch(".data/degrees.json");
        let reClasses = await fetch(".data/classes.json");
        
        alunos = await reStudents.json();
        cursos = await reDegrees.json();
        turmas = await reClasses.json();

        console.log("Dados carregados com sucesso!!");

        redenrizarTabela();
    } catch (erro){
        console.error('Erro em buscar os dados:', erro);
    }
}

buscarDadosAlunos();