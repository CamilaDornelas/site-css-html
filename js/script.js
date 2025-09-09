// Função para mostrar mensagem ao clicar no botão CTA
function mostrarMensagem() {
    alert('DEAD!');
}

// Função para destacar card ao passar o mouse
function destacarCard(element) {
    element.classList.add('destaque');
}

function removerDestaque(element) {
    element.classList.remove('destaque');

}

// Função para destacar card ao passar o mouse
function mudaCor(element) {
      // Gera uma cor aleatória
      const cor = "#000000"

      element.style.backgroundColor = cor;
}

// Função para enviar formulário
function enviarFormulario(event) {
    event.preventDefault();
    alert('Carta enviada!');
    event.target.reset();
}

// Contador animado - só inicia quando a seção estiver visível
function iniciarContador() {
    const contadorSection = document.querySelector('.contador');
    const numeros = document.querySelectorAll('.numero');
    
    if (!contadorSection || numeros.length === 0) return;
    
    let contadorIniciado = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !contadorIniciado) {
                contadorIniciado = true;
                
                numeros.forEach(numero => {
                    const target = parseInt(numero.getAttribute('data-target'));
                    const incremento = Math.ceil(target / 100);
                    let valorAtual = 0;
                    
                    const timer = setInterval(() => {
                        valorAtual += incremento;
                        if (valorAtual >= target) {
                            valorAtual = target;
                            clearInterval(timer);
                        }
                        numero.textContent = valorAtual;
                    }, 20);
                });

                // Para de observar após iniciar o contador
                observer.unobserve(contadorSection);
            }
        });
    }, {
        threshold: 0.5 // Quando 50% da seção estiver visível
    });

    // Começa a observar a seção de contador
    observer.observe(contadorSection);
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

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar classe active no menu durante a rolagem
function atualizarMenuAtivo() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id') || '';
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Iniciar quando a página carregar
window.addEventListener('load', function() {
    iniciarContador();
    atualizarMenuAtivo();
});

// Atualizar menu durante o scroll
window.addEventListener('scroll', function() {
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