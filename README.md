<div align="center">

# 🔴 Stranger Things — The Experience

**Uma landing page temática com preloader SVG animado, ScrollSmoother e SplitText.**

![Preview do projeto](./images/preview-desktop.png)

[![Deploy](https://img.shields.io/badge/🚀_Deploy-GitHub_Pages-222?style=for-the-badge)](https://tuliovitor.github.io/stranger-things)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com)

</div>

---

## 📌 Sobre o projeto

O **Stranger Things — The Experience** é uma landing page temática inspirada na experiência imersiva oficial da Netflix, desenvolvida como projeto de portfólio com foco em três áreas:

- **Preloader SVG animado** com stroke progressivo e preenchimento em sequência
- **Animações de scroll orquestradas** com ScrollTrigger, incluindo blur, fade e stagger
- **Tipografia animada** com SplitText caractere por caractere

O projeto não replica apenas o visual — cada decisão de animação tem uma intenção narrativa: o preloader cria suspense antes da página aparecer, e o scroll revela o conteúdo como se o usuário estivesse "adentrando" o Mundo Invertido.

---

## 🎬 Demonstração

| Desktop | Mobile |
|---|---|
| ![Desktop](./images/preview-desktop.png) | ![Mobile](./images/preview-mobile.jpg) |

---

## ✨ Funcionalidades

- **Preloader SVG** — o logo de Stranger Things é desenhado via `strokeDashoffset` e depois preenchido, tudo em uma GSAP Timeline
- **ScrollSmoother** cobrindo toda a página com `smooth: 1.5`
- **Hero fullscreen** com duas imagens em camadas (`picture`) animadas em direções opostas na entrada
- **Overlay gradiente** no hero para transição suave para o fundo escuro
- **Seção de cidades** com cards animados em blur + fade via scrub no scroll
- **SplitText** nos elementos `.text-split` — cada caractere entra com `y: 40` e `opacity: 0` em stagger
- **Lista de agradecimentos** com `x: 20` e blur scrubado por ScrollTrigger
- **Footer com parallax** — desliza de cima ao ser revelado via scrub
- **Texto infinito animado** no rodapé via `@keyframes` CSS com `translateX`
- **Totalmente responsivo** — breakpoints para mobile (600px) e tablet (1024px)

---

## 🧱 Stack

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura completa da página |
| CSS3 com custom properties | Design system, layout e responsividade |
| Fonte customizada Benguiat | Tipografia temática carregada via `@font-face` |
| JavaScript vanilla | Orquestração do preloader e das animações |
| GSAP + ScrollTrigger | Animações de entrada, saída e scrub |
| GSAP ScrollSmoother | Scroll fluido em tela inteira |
| GSAP SplitText | Animação caractere por caractere |

> Nenhuma dependência de frontend além do GSAP. Zero `npm install`. Um único `index.html`.

---

## 🗂️ Estrutura do projeto

```
stranger-things/
├── index.html          # Estrutura da página + SVG do preloader inline
├── styles.css          # Design system + responsividade
├── scripts.js          # Preloader timeline + todas as animações GSAP
├── fonts/
│   └── BenguiatBold.ttf
└── images/
    ├── bg-sec2.webp    # Background da seção de cidades (Demogorgon)
    ├── bg-footer.webp
    ├── card1.webp
    ├── card2.webp
    └── card3.webp
```

---

## 🧠 Decisões técnicas

### Preloader como Timeline GSAP

O preloader usa uma `gsap.timeline()` com callback `onComplete` — só quando a animação do SVG termina completamente é que `animarPagina()` é chamada e o preloader some com `opacity: 0` + `display: none`. Isso evita que o usuário veja o conteúdo antes da cena de entrada terminar.

```javascript
const tl = gsap.timeline({
    onComplete() {
        animarPagina();
        gsap.to("#preloader", { opacity: 0, display: "none" });
    }
});

tl.to("#preloader path", { duration: 1, strokeDashoffset: 0 });
tl.to("#preloader path", { fill: "rgb(168, 19, 19)", duration: .5 });
```

### SVG com stroke progressivo

O logo SVG tem `stroke-dasharray` e `stroke-dashoffset` definidos no CSS — o `dashoffset` começa no valor total do comprimento do path (1150) e vai a 0, criando o efeito de "desenho" progressivo antes do preenchimento.

### SplitText em grupo via querySelectorAll

Em vez de animar um único elemento, o código seleciona todos os `.text-split` com `querySelectorAll` e aplica o `SplitText` individualmente em cada um via `forEach`. Isso mantém o código limpo sem duplicar blocos de animação.

### Scroll suave separado das animações

O `ScrollSmoother.create()` é chamado antes de qualquer animação, mas as animações em si só são registradas após o preloader completar (`animarPagina()`). Isso evita que os `start/end` dos ScrollTriggers sejam calculados antes do layout final estar pronto.

---

## 📈 Processo de desenvolvimento

| Etapa | O que foi feito |
|---|---|
| 01 | Estrutura HTML e design system no CSS |
| 02 | Hero: layout em duas colunas, imagens em camadas e overlay gradiente |
| 03 | Seção de cidades com cards e responsividade |
| 04 | Seção de depoimentos, lista de cidades e footer com texto infinito |
| 05 | SVG do logo inline + animação de stroke com `stroke-dashoffset` |
| 06 | Preloader completo com GSAP Timeline e callback `onComplete` |
| 07 | Configuração do ScrollSmoother |
| 08 | Animações de entrada do hero, cards e lista |
| 09 | SplitText nos títulos e ajuste de stagger |
| 10 | Ajustes de responsividade mobile e testes |

---

## 💡 O que eu aprenderia diferente

- Teria colocado o SVG do preloader em um arquivo externo desde o início — inline no HTML funciona, mas dificulta a edição do path em projetos maiores
- Teria calculado o `stroke-dasharray` exato do path antes de começar, em vez de usar um valor aproximado (1150) ajustado no teste
- Teria separado a lógica do preloader da lógica de animação de página em arquivos distintos desde o começo para facilitar a manutenção

---

## 👨‍💻 Autor

**TULIO VITOR**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/tuliovitor)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tuliovitor)

---

<div align="center">

Feito com muito ☕ e muito 🔴

</div>
