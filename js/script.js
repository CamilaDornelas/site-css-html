// Função para mostrar mensagem ao clicar no botão CTA
function mostrarMensagem() {
    alert('DEAD!');
}

// Função para enviar formulário
function enviarFormulario(event) {
    event.preventDefault();
    alert('Enviado com sucesso!');
    event.target.reset();
}

// Menu mobile
document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        navMenu.classList.remove('show');
        hamburger.classList.remove('active');
    });
});

function atualizarMenuAtivo() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentPage = window.location.pathname.split("/").pop(); 
    // pega só o nome do arquivo, ex: "sobre.html"

    navLinks.forEach(link => {
        link.classList.remove('active'); // remove de todos
        const href = link.getAttribute('href');
        
        if (href === currentPage || (currentPage === "" && href === "index.html")) {
            link.classList.add('active'); // adiciona no link certo
        }
    });
}

// chama a função assim que carregar
document.addEventListener("DOMContentLoaded", atualizarMenuAtivo);


// Iniciar quando a página carregar
window.addEventListener('load', function() {
    atualizarMenuAtivo();
});

// Fechar menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!event.target.closest('.navbar') && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        hamburger.classList.remove('active');
    }
});

// Prevenir que o menu feche quando clicar dentro dele
document.querySelector('.nav-menu').addEventListener('click', function(event) {
    event.stopPropagation();
});