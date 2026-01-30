// ANIMAÇÕES SCROLL (ROLAGEM)

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    smooth: 1.5,
    effects: true
});

function animarPagina() {
    // ANIMAÇÕES HERO

    gsap.from(".hero", {
        opacity: 0,
        duration: 1

    });

    gsap.from("picture:nth-child(2)", {
        y: 60,
        duration: 1
    });

    gsap.from("picture:nth-child(1)", {
        y: -60,
        duration: 1
    });

    // ANIMAÇÕES CARDS

    gsap.from(".card", {
        opacity: 0,
        stagger: 0.3,
        filter: "blur(20px)",
        scrollTrigger: {
            trigger: ".cards",
            start: "0% 80%",
            end: "100% 70%",
            scrub: true
        }
    });

    gsap.from(".secao-obrigado ul li", {
        opacity: 0,
        x: 20,
        stagger: .1,
        duration: 1,
        filter: "blur(20px)",
        scrollTrigger: {
            trigger: ".secao-obrigado ul",
            start: "0% 80%",
            end: "100% 50%",
            scrub: true
        }
    });

    // ANIMAÇÕES FOOTER

    gsap.from("footer", {
        y: "-30%",
        immediateRender: false,
        scrollTrigger: {
            trigger: "footer",
            scrub: true,
            invalidateOnRefresh: true,
            end: "100% 100%"
        }
    });

    // LETRAS ANIMADAS

    //SELECIONE TODOS OS ELEMENTOS QUE TEM A CLASSE .text-split

    const grupoTextoSplit = document.querySelectorAll(".text-split");

    // ANIMAR CADA ELEMENTO DESSE GRUPAMENTO -> ForEach

    grupoTextoSplit.forEach((textoUnicoSplit) => {
        const split = SplitText.create(textoUnicoSplit, {
            type: "lines, words, chars",
            mask: "lines"
        });

        gsap.from(split.chars, {
            y: 40,
            opacity: 0,
            duration: .3,
            stagger: .03,
            scrollTrigger: {
                trigger: textoUnicoSplit,
            }
        });
    });
}

// PRELOADER -> CRIA TIMELINE

const tl = gsap.timeline({
    onComplete() {
        animarPagina();
        gsap.to("#preloader", {
            opacity: 0,
            display: "none"
        });
    }
});

tl.to("#preloader path", {
    duration: 1,
    strokeDashoffset: 0
});

tl.to("#preloader path", {
    fill: "rgb(168, 19, 19)",
    duration: .5,
    strokeDashoffset: 0
});
