// ==========================================
// LDAPK STUDIO
// SCRIPT.JS
// ==========================================


// ==========================================
// CONFIGURAÇÃO DO WHATSAPP
// ==========================================

// Número com código do país (55 = Brasil)
const numeroWhatsapp = "5551995926751";


// ==========================================
// FUNÇÃO PARA ABRIR O WHATSAPP
// ==========================================

function abrirWhatsapp(mensagem) {

    const link =
        "https://wa.me/" +
        numeroWhatsapp +
        "?text=" +
        encodeURIComponent(mensagem);

    window.open(link, "_blank");
}


// ==========================================
// MENU MOBILE
// ==========================================

const menuMobile = document.getElementById("menuMobile");
const menu = document.querySelector(".menu");

if (menuMobile && menu) {

    menuMobile.addEventListener("click", function () {

        menu.classList.toggle("ativo");

        if (menu.classList.contains("ativo")) {

            menuMobile.textContent = "✕";

        } else {

            menuMobile.textContent = "☰";

        }

    });


    // FECHAR MENU AO CLICAR EM UMA OPÇÃO

    const linksMenu = menu.querySelectorAll("a");

    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("ativo");

            menuMobile.textContent = "☰";

        });

    });

}


// ==========================================
// WHATSAPP - CRIAR APLICATIVO
// ==========================================

const btnCriarApp =
    document.getElementById("btnCriarApp");

if (btnCriarApp) {

    btnCriarApp.addEventListener("click", function () {

        const mensagem =
            "Olá! Vi o site da LDAPK Studio. " +
            "Tenho uma ideia para um aplicativo Android " +
            "e gostaria de conversar sobre o projeto.";

        abrirWhatsapp(mensagem);

    });

}


// ==========================================
// WHATSAPP - MODIFICAR APLICATIVO
// ==========================================

const btnModificarApp =
    document.getElementById("btnModificarApp");

if (btnModificarApp) {

    btnModificarApp.addEventListener("click", function () {

        const mensagem =
            "Olá! Vi o site da LDAPK Studio. " +
            "Tenho um aplicativo e gostaria de fazer " +
            "algumas alterações ou adicionar novas funções.";

        abrirWhatsapp(mensagem);

    });

}


// ==========================================
// WHATSAPP - PEDIR ORÇAMENTO
// ==========================================

const btnOrcamento =
    document.getElementById("btnOrcamento");

if (btnOrcamento) {

    btnOrcamento.addEventListener("click", function () {

        const mensagem =
            "Olá! Vi o site da LDAPK Studio. " +
            "Gostaria de solicitar um orçamento para meu projeto. " +
            "Posso explicar o que preciso?";

        abrirWhatsapp(mensagem);

    });

}


// ==========================================
// WHATSAPP - BOTÃO GERAL
// ==========================================

const btnWhatsapp =
    document.getElementById("btnWhatsapp");

if (btnWhatsapp) {

    btnWhatsapp.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            const mensagem =
                "Olá! Vi o site da LDAPK Studio " +
                "e gostaria de conversar sobre " +
                "a criação ou modificação de um aplicativo.";

            abrirWhatsapp(mensagem);

        }
    );

}


// ==========================================
// GALERIAS DOS PROJETOS
// ==========================================

const screenshots =
    document.querySelectorAll(".screenshot");

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const modalClose =
    document.getElementById("modalClose");

const modalPrev =
    document.getElementById("modalPrev");

const modalNext =
    document.getElementById("modalNext");

const modalCounter =
    document.getElementById("modalCounter");


// ==========================================
// CONTROLE DA GALERIA ATUAL
// ==========================================

let galeriaAtual = "";

let imagensGaleriaAtual = [];

let imagemAtual = 0;


// ==========================================
// PEGAR IMAGENS DE UMA GALERIA
// ==========================================

function pegarImagensGaleria(nomeGaleria) {

    const imagens =
        document.querySelectorAll(
            '.screenshot[data-gallery="' +
            nomeGaleria +
            '"]'
        );

    return Array.from(imagens);

}


// ==========================================
// ABRIR IMAGEM
// ==========================================

function abrirImagem(imagemClicada) {

    if (!imagemClicada) {
        return;
    }

    if (!imageModal || !modalImage) {
        return;
    }


    // DESCOBRIR A GALERIA

    galeriaAtual =
        imagemClicada.getAttribute(
            "data-gallery"
        );


    if (!galeriaAtual) {
        return;
    }


    // PEGAR APENAS AS IMAGENS
    // DO PROJETO CLICADO

    imagensGaleriaAtual =
        pegarImagensGaleria(
            galeriaAtual
        );


    if (imagensGaleriaAtual.length === 0) {
        return;
    }


    // DESCOBRIR QUAL IMAGEM FOI CLICADA

    imagemAtual =
        imagensGaleriaAtual.indexOf(
            imagemClicada
        );


    if (imagemAtual < 0) {

        imagemAtual = 0;

    }


    // MOSTRAR IMAGEM

    mostrarImagemAtual();


    // ABRIR VISUALIZADOR

    imageModal.classList.add(
        "ativo"
    );

    document.body.classList.add(
        "modal-aberto"
    );

}


// ==========================================
// MOSTRAR IMAGEM ATUAL
// ==========================================

function mostrarImagemAtual() {

    if (!modalImage) {
        return;
    }

    if (imagensGaleriaAtual.length === 0) {
        return;
    }


    modalImage.src =
        imagensGaleriaAtual[
            imagemAtual
        ].src;


    atualizarContador();

}


// ==========================================
// ATUALIZAR CONTADOR
// ==========================================

function atualizarContador() {

    if (!modalCounter) {
        return;
    }


    if (imagensGaleriaAtual.length === 0) {

        modalCounter.textContent = "";

        return;

    }


    modalCounter.textContent =
        (imagemAtual + 1) +
        " / " +
        imagensGaleriaAtual.length;

}


// ==========================================
// PRÓXIMA IMAGEM
// ==========================================

function proximaImagem() {

    if (imagensGaleriaAtual.length === 0) {
        return;
    }


    imagemAtual++;


    if (
        imagemAtual >=
        imagensGaleriaAtual.length
    ) {

        imagemAtual = 0;

    }


    mostrarImagemAtual();

}


// ==========================================
// IMAGEM ANTERIOR
// ==========================================

function imagemAnterior() {

    if (imagensGaleriaAtual.length === 0) {
        return;
    }


    imagemAtual--;


    if (imagemAtual < 0) {

        imagemAtual =
            imagensGaleriaAtual.length - 1;

    }


    mostrarImagemAtual();

}


// ==========================================
// FECHAR IMAGEM
// ==========================================

function fecharImagem() {

    if (!imageModal) {
        return;
    }


    imageModal.classList.remove(
        "ativo"
    );

    document.body.classList.remove(
        "modal-aberto"
    );


    if (modalImage) {

        modalImage.src = "";

    }


    galeriaAtual = "";

    imagensGaleriaAtual = [];

    imagemAtual = 0;


    if (modalCounter) {

        modalCounter.textContent = "";

    }

}


// ==========================================
// CLIQUE NOS PRINTS
// ==========================================

screenshots.forEach(function (imagem) {

    imagem.addEventListener(
        "click",
        function () {

            abrirImagem(imagem);

        }
    );

});


// ==========================================
// BOTÃO X
// ==========================================

if (modalClose) {

    modalClose.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            fecharImagem();

        }
    );

}


// ==========================================
// SETA ESQUERDA
// ==========================================

if (modalPrev) {

    modalPrev.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            imagemAnterior();

        }
    );

}


// ==========================================
// SETA DIREITA
// ==========================================

if (modalNext) {

    modalNext.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            proximaImagem();

        }
    );

}


// ==========================================
// CLICAR FORA DA IMAGEM
// ==========================================

if (imageModal) {

    imageModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                imageModal
            ) {

                fecharImagem();

            }

        }
    );

}


// ==========================================
// CONTROLE PELO TECLADO
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (!imageModal) {
            return;
        }


        if (
            !imageModal.classList.contains(
                "ativo"
            )
        ) {
            return;
        }


        // ESC = FECHAR

        if (event.key === "Escape") {

            fecharImagem();

        }


        // SETA DIREITA

        if (event.key === "ArrowRight") {

            proximaImagem();

        }


        // SETA ESQUERDA

        if (event.key === "ArrowLeft") {

            imagemAnterior();

        }

    }
);


// ==========================================
// GESTOS NO CELULAR
// ==========================================

let toqueInicioX = 0;

let toqueFimX = 0;


if (imageModal) {

    imageModal.addEventListener(
        "touchstart",
        function (event) {

            if (
                event.changedTouches.length > 0
            ) {

                toqueInicioX =
                    event.changedTouches[0]
                        .screenX;

            }

        },
        {
            passive: true
        }
    );


    imageModal.addEventListener(
        "touchend",
        function (event) {

            if (
                event.changedTouches.length === 0
            ) {
                return;
            }


            toqueFimX =
                event.changedTouches[0]
                    .screenX;


            verificarGesto();

        },
        {
            passive: true
        }
    );

}


// ==========================================
// VERIFICAR GESTO
// ==========================================

function verificarGesto() {

    const distancia =
        toqueFimX -
        toqueInicioX;


    const distanciaMinima = 50;


    // ARRASTOU PARA ESQUERDA
    // PRÓXIMA IMAGEM

    if (
        distancia <
        -distanciaMinima
    ) {

        proximaImagem();

        return;

    }


    // ARRASTOU PARA DIREITA
    // IMAGEM ANTERIOR

    if (
        distancia >
        distanciaMinima
    ) {

        imagemAnterior();

    }

}


// ==========================================
// ANIMAÇÕES AO ROLAR
// ==========================================

const elementos =
    document.querySelectorAll(
        ".service-card, " +
        ".projeto-completo, " +
        ".project-card, " +
        ".step, " +
        ".contact-option"
    );


if (
    "IntersectionObserver" in window
) {

    const observador =
        new IntersectionObserver(

            function (entradas) {

                entradas.forEach(
                    function (entrada) {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target
                                .classList.add(
                                    "visivel"
                                );


                            observador.unobserve(
                                entrada.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.12
            }

        );


    elementos.forEach(
        function (elemento) {

            elemento.classList.add(
                "animar"
            );

            observador.observe(
                elemento
            );

        }
    );

} else {

    elementos.forEach(
        function (elemento) {

            elemento.classList.add(
                "visivel"
            );

        }
    );

}