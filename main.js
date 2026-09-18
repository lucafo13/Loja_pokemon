let continues = false;
const api = async() => {
    let aura = await axios.get('https://pokeapi.co/api/v2/pokemon/dratini')
    console.log(aura.data.sprites.back_default)
    console.log(aura.data)
    const img = aura.data.sprites.front_shiny   ;
    const aurinha = document.getElementById('aurinha')
    aurinha.src = 'https://i.pinimg.com/originals/3c/06/59/3c06599306cca1e170ce8df10949cf91.gif'

       
  
    
}
api() // n sei o q to fazendo , isso aqui e so pra testar a fonte de imagens de pokemons sem precisar baixar uma caralhada de png
gsap.registerPlugin(ScrollTrigger)
const nada = gsap.to('.ran', {
    opacity: 0,
    paused: false
    
})
const intro = gsap.timeline();
intro
.to(".aura", {
        x: 700,
        
        rotation: 720,
        duration: 1.5,
        ease: "power2.out"
    })
    

    
    
        
        .to("#intro", {
            opacity: 0,
            duration: 0.6,
            
        })
        .from('.pokeTitle', {
            x: -200,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.out'
        })
        .from('.frases', {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        })
        
        .from('.char', {
            x: 500,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.out'
        })
        .to('.btns', {
            y: -15,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: 'power2.out'
        })
        .to('.char', {
            y: -15,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'power2.out'
        })
     
        continues = true

gsap.to(".gramita", {
    y: -200,

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }

})
const rotacaoPokebola = gsap.to(".flutua", {
    rotation: 360,
    duration: 2,
    repeat: -1,       
    ease: "none",     
    paused: true      
});


gsap.to(".flutua", {
    y: -700,
    opacity: 1,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: ".hero",
        start: "top 0%", 
        toggleActions: "play none none none", 
        onEnter: () => {
            nada.reverse()
            rotacaoPokebola.play();
            gsap.to('.ran', {
                     y: -15,
            duration: 1,
            repeat: -1,
            opacity: 1,
            yoyo: true,
            scale: 0.99,
            ease: 'power2.inOut'
            })
        }
    }
});

const hover = gsap.to('.butao', {
    y:-100,
    duration: 1,
    
    scale: 1.1,
    ease: "none",
    paused: true
})
const buton = document.getElementById('butao')
buton.addEventListener('mouseenter', () => {
    hover.play()
})
buton.addEventListener('mouseleave', () => {
    hover.reverse()
})

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







        