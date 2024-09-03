let alunos = [
    { id: 1, nome: "Adriana Perantoni", foto: "./img/alunos/NI.png", dataNascimento: "--/--/----" },
    { id: 2, nome: "Ana Clara", foto: "./img/alunos/NI.png", dataNascimento: "--/--/----" },
    { id: 3, nome: "Bruno Taváres", foto: "./img/alunos/bruno.jpg", dataNascimento: "30/10/2006" },
    { id: 4, nome: "Daniel de Souza", foto: "./img/alunos/daniel.jpg", dataNascimento: "21/05/2007" },
    { id: 5, nome: "Davi Lucas", foto: "./img/alunos/NI.png", dataNascimento: "--/--/----" },
    { id: 6, nome: "Emilly de Oliveira", foto: "./img/alunos/emilly.jpg", dataNascimento: "27/09/2006" },
    { id: 7, nome: "Gabriel Arruda", foto: "./img/alunos/gabriel.jpg", dataNascimento: "24/02/2006" },
    { id: 8, nome: "Gabrielle Milaré", foto: "./img/alunos/gabrielle.png", dataNascimento: "25/11/2006" },
    { id: 9, nome: "Gabrielly Fabrício", foto: "./img/alunos/gabrielly.jpg", dataNascimento: "14/11/2006" },
    { id: 10, nome: "Giovana Marques", foto: "./img/alunos/NI.png", dataNascimento: "--/--/----" },
    { id: 11, nome: "Gustavo Henrique", foto: "./img/alunos/gustavoH.jpg", dataNascimento: "08/08/2006" },
    { id: 12, nome: "Gustavo Pontolio", foto: "./img/alunos/pontolio.jpg", dataNascimento: "06/02/2006" },
    { id: 13, nome: "Iago", foto: "./img/alunos/NI.png", dataNascimento: "--/--/----" },
    { id: 14, nome: "Iago Fedochenko", foto: "./img/alunos/iagoF.jpg", dataNascimento: "07/03/2007" },
    { id: 15, nome: "Isabella Sayuri", foto: "./img/alunos/isabella.jpg", dataNascimento: "11/05/2007" },
    { id: 16, nome: "João Celso", foto: "./img/alunos/joaoC.jpg", dataNascimento: "05/02/2007" },
    { id: 17, nome: "João Vitor", foto: "./img/alunos/joaoV.jpg", dataNascimento: "27/05/2007" },
    { id: 18, nome: "Kaique Geraldo", foto: "./img/alunos/kaique.jpg", dataNascimento: "24/04/2007" },
    { id: 19, nome: "Kaline Trindade", foto: "./img/alunos/kaline.jpg", dataNascimento: "05/06/2007" },
    { id: 20, nome: "Kelvin Leonardo", foto: "./img/alunos/NI.png", dataNascimento: "--/--/----" },
    { id: 21, nome: "Lara Marques", foto: "./img/alunos/NI.png", dataNascimento: "--/--/----" },
    { id: 22, nome: "Leonardo Galo", foto: "./img/alunos/galo.jpg", dataNascimento: "23/04/2007" },
    { id: 23, nome: "Leticya Lilian", foto: "./img/alunos/letycia.jpg", dataNascimento: "04/06/2007" },
    { id: 24, nome: "Levi", foto: "./img/alunos/NI.png", dataNascimento: "--/--/----" },
    { id: 25, nome: "Luana Balbo", foto: "./img/alunos/NI.png", dataNascimento: "--/--/----" },
    { id: 26, nome: "Luisa Camargo", foto: "./img/alunos/luisa.jpg", dataNascimento: "26/06/2007" },
    { id: 27, nome: "Maria Victoria", foto: "./img/alunos/NI.png", dataNascimento: "--/--/----" },
    { id: 28, nome: "Matheus Kreski", foto: "./img/alunos/NI.png", dataNascimento: "--/--/----" },
    { id: 29, nome: "Ruan Padilha", foto: "./img/alunos/ruan.jpg", dataNascimento: "01/11/2006" },
    { id: 30, nome: "Victória Souza", foto: "./img/alunos/victoria.jpg", dataNascimento: "04/08/2006" },
    { id: 31, nome: "Vitor Mapelli", foto: "./img/alunos/NI.png", dataNascimento: "--/--/----" },
    { id: 32, nome: "Vinicius Alberto", foto: "./img/alunos/NI.png", dataNascimento: "--/--/----" }
];


// Seleciona o contêiner onde os alunos serão exibidos
let container = document.getElementById("alunosContainer");

// Gera o HTML para cada aluno
alunos.forEach(function(aluno) {
    container.innerHTML += `
        <a href="#" class="aluno" data-id="${aluno.id}">
            <img src="${aluno.foto}" alt="${aluno.nome}" style="width: 25px; height: 25px; object-fit: cover;">
            ${aluno.nome}
        </a>
    `;
});

// Seleciona o modal e seus elementos
const modal = document.getElementById("modal");
const modalFoto = document.getElementById("modalFoto");
const modalNome = document.getElementById("modalNome");
const modalInfo = document.getElementById("modalInfo");
const closeButton = document.querySelector(".close-button");

// Função para abrir o modal com informações do aluno
function abrirModal(aluno) {
    modalFoto.src = aluno.foto;
    modalNome.textContent = aluno.nome;
    modalInfo.textContent = `Data de Nascimento: ${aluno.dataNascimento}`;
    modal.style.display = "flex";
}

// Adiciona o evento de clique aos links dos alunos
document.querySelectorAll("#alunosContainer a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Previne a ação padrão do link
        const alunoId = this.getAttribute("data-id");
        const aluno = alunos.find(a => a.id == alunoId);
        abrirModal(aluno);
    });
});

// Fecha o modal ao clicar no botão de fechar
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});