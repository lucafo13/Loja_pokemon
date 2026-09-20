const prosinput = gsap.timeline()
prosinput.to('input', {
    scale: 0.95,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'inOut'
})

const form = document.querySelector('form');
const popup = document.querySelector('.formpopup');
const popupData = document.querySelector('.popupdata');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const resenha = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        telefone: document.getElementById('telefone').value,
        data: document.getElementById('data').value,
        sexo: document.getElementById('sexo').value,
        cor: document.getElementById('cor').value,
        estadoCivil: document.getElementById('estadoCivil').value,
        sangue: document.getElementById('sangue').value,
        estado: document.getElementById('estado').value,
        cidade: document.getElementById('cidade').value,
        cep: document.getElementById('cep').value,
        time: document.getElementById('time').value,
        comida: document.getElementById('comida').value,
        situa: document.getElementById('situa').value,
        raiz: document.getElementById('raiz').value,
        gostou: document.getElementById('gostou').value
    };

    popupData.replaceChildren()
    Object.entries(resenha).forEach(([campo, valor]) => {
        const linha = document.createElement('p');
        linha.className = 'popupdatarow';
        linha.textContent = `${campo}: ${valor}`
        popupData.append(linha)
    });

    
    popup.showModal();
});