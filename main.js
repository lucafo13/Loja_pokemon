const som = document.getElementById('music')
window.addEventListener('click', () => {
    som.play()
} )
    
const vic = document.getElementById('vic')
vic.addEventListener('click',() => {
    document.querySelector('.b').style.display = 'block'
    setTimeout(() => {
        
        document.querySelector('.b').style.display = 'none'
    }, 3000);
})
let continues = false;
const api = async () => {
  let aura = await axios.get("https://pokeapi.co/api/v2/pokemon/dratini");
  console.log(aura.data.sprites.back_default);
  console.log(aura.data);
  const img = aura.data.sprites.front_shiny;
  const aurinha = document.getElementById("aurinha");
  aurinha.src =
    "https://i.pinimg.com/originals/3c/06/59/3c06599306cca1e170ce8df10949cf91.gif";
};
api(); // n sei o q to fazendo , isso aqui e so pra testar a fonte de imagens de pokemons sem precisar baixar uma caralhada de png
gsap.registerPlugin(ScrollTrigger);
const nada = gsap.to(".ran", {
  opacity: 0,
  paused: false,
});
const intro = gsap.timeline();
intro
  .to(".aura", {
    x: 700,

    rotation: 720,
    duration: 1.5,
    ease: "power2.out",
  })

  .to("#intro", {
    autoAlpha: 0,
    duration: 0.6,
  })
  .from(".pokeTitle", {
    x: -200,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  })
  .from(".frases", {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  })

  .from(".char", {
    x: 500,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  })
  .to(".btns", {
    y: -15,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "power2.out",
  })
  .to(".char", {
    y: -15,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power2.out",
  });

continues = true;

gsap.to(".gramita", {
  y: -200,

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
});
gsap.to(".terra", {
  y: -180,

  scrollTrigger: {
    trigger: ".sec",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
});
const rotacaoPokebola = gsap.to(".flutua", {
  rotation: 360,
  duration: 2,
  repeat: -1,
  ease: "none",
  paused: true,
});

gsap.to(".flutua", {
  y: -700,
  opacity: 1,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 0%",
    toggleActions: "play none none none",
    onEnter: () => {
      nada.reverse();
      rotacaoPokebola.play();
      gsap.to(".ran", {
        y: -15,
        duration: 1,
        repeat: -1,
        opacity: 1,
        yoyo: true,
        scale: 0.99,
        ease: "power2.inOut",
      });
    },
  },
});

const hover = gsap.to(".butao", {
  y: -100,
  duration: 1,

  scale: 1.1,
  ease: "none",
  paused: true,
});
const buton = document.getElementById("butao");
const tipoEhTipoAnTipoNadaVer = () => {
  document.body.classList.remove("arrogante");
};
// tipoEhTipoAnTipoNadaVer();
buton.addEventListener("click", () => {
  tipoEhTipoAnTipoNadaVer();
  alert("s");
});
gsap.fromTo(
  ".card",
  {
    y: 40,
    opacity: 0,
    rotation: () => gsap.utils.random(-15, 15),
    scale: 0.8,
  },
  {
    y: 0,
    opacity: 1,
    rotation: 0,
    scale: 1,
    duration: 0.7,
    ease: "power3.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".cards",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  },
);
// gsap.to(".flutua", {

//     opacity: 1,
//     duration: 2,

//     rotation: 720,

//     ease: 'power2.inOut',
//     repeat: -1,

//         scrollTrigger: {
//         trigger: ".hero",
//         start: "bottom bottom",
//         toggleActions: "play none none none"

// }});

let array = ["aura", "do", "arcanjoleto"];

array.forEach((element) => {
  const aleatorio = Math.floor(Math.random() * array.length);
  console.log(array[aleatorio]);
});

const btns = document.querySelectorAll('.fc')
btns.forEach(element => {
    element.addEventListener('click', () => {
        location.href= 'pgns1/form.html'
    })
});