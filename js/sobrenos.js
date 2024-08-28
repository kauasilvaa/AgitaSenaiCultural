let alunos = [
    {
        id: 1,
        nome: "Kaique Geraldo",
        foto: "./img/neylindo.png"
    },
    {
        id: 2,
        nome: "Gabrielly Silva",
        foto: "./img/ronaldinho.png"
    },
    {
        id: 3,
        nome: "Emilly Silva",
        foto: "./img/lala.png"
    },
    {
        id: 4,
        nome: "Luisa Pereira",
        foto: "./img/cj.png"
    },
    {
        id: 5,
        nome: "Victória Pereira",
        foto: "./img/top.png"
    }
];

// Seleciona o contêiner onde os alunos serão exibidos
let container = document.getElementById("alunosContainer");

// Gera o HTML para cada aluno
alunos.forEach(function(aluno) {
    container.innerHTML += `
        <a href="#" class="aluno">
            <img src="${aluno.foto}" alt="${aluno.nome}" style=" width: 25px; height: 25px">
            ${aluno.nome}
        </a>
    `;
});
