// =============================
// BOTÕES DE NAVEGAÇÃO
// =============================

const btnHistoria = document.getElementById("btnHistoria");

if (btnHistoria) {
    btnHistoria.addEventListener("click", () => {
        document.getElementById("historia").scrollIntoView({
            behavior: "smooth"
        });
    });
}

const btnTimeline = document.getElementById("btnTimeline");

if (btnTimeline) {
    btnTimeline.addEventListener("click", () => {
        document.querySelector(".timeline").scrollIntoView({
            behavior: "smooth"
        });
    });
}

const btnFuturo = document.getElementById("btnFuturo");

if (btnFuturo) {
    btnFuturo.addEventListener("click", () => {
        document.getElementById("futuro").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// BOTÃO VOLTAR AO INÍCIO

document.addEventListener("DOMContentLoaded", () => {

    const btnInicio = document.getElementById("btnInicio");

    console.log("Botão encontrado:", btnInicio);

    if (btnInicio) {

        btnInicio.addEventListener("click", () => {

            console.log("Clique no botão voltar");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});

// =============================
// CONTADOR
// =============================

const inicio = new Date("2020-07-26T00:00:00");

function atualizar() {

    const agora = new Date();
    const diferenca = agora - inicio;

    const segundos = Math.floor((diferenca / 1000) % 60);
    const minutos = Math.floor((diferenca / 1000 / 60) % 60);
    const horas = Math.floor((diferenca / 1000 / 60 / 60) % 24);
    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;
}

setInterval(atualizar, 1000);
atualizar();

// =============================
// ANIMAÇÃO DA TIMELINE
// =============================

const eventos = document.querySelectorAll(".evento");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("mostrar");
        }

    });

});

eventos.forEach((evento) => observer.observe(evento));