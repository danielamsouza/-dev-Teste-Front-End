let professores = [];
let disciplinas = [];
let turmas = [];
let alunos = [];
let relacionamentos = [];
let cursos = [];

async function buscarDados() {
    try {
        let reqProfessores = await fetch(".data/teachers.json");
        let reqDisciplinas = await fetch(".data/matters.json");
        let reqTurmas = await fetch(".data/classes.json");
        let reqAlunos = await fetch(".data/students.json");
        let reqRelacionamentos = await fetch(".data/relationships.json");
        let reqCursos = await fetch(".data/degrees.json");

        professores = await reqProfessores.json();
        disciplinas = await reqDisciplinas.json();
        cursos = await reqCursos.json();
        relacionamentos = await reqRelacionamentos.json();
        alunos = await reqAlunos.json();

        let dadosTurmas = await reqTurmas.json();
        turmas = dadosTurmas.classes;

        console.log("Dados carregados com sucesso!");

    } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
    }      
}
buscarDados();