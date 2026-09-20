const prosinput = gsap.timeline()
prosinput.to('input', {
    scale: 0.95,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'inOut'
})

const form = document.querySelector('form');
const popup = document.querySelector('.form-popup');
const popupData = document.querySelector('.popup-data');

const fieldLabels = {
    nome: 'Nome',
    sobrenome: 'Sobrenome',
    email: 'Email',
    senha: 'Senha',
    telefone: 'Telefone',
    data: 'Data de nascimento',
    sexo: 'Sexo',
    cor: 'Cor',
    estadoCivil: 'Estado civil',
    sangue: 'Tipo sanguíneo',
    estado: 'Estado',
    cidade: 'Cidade',
    cep: 'CEP',
    time: 'Time de futebol',
    comida: 'Cartão',
    situa: 'Resposta',
    raiz: 'Raiz quadrada',
    gostou: 'Gostou'
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const valores = {
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

    popupData.replaceChildren();

    Object.entries(valores).forEach(([campo, valor]) => {
        const linha = document.createElement('p');
        linha.className = 'popup-data-row';
        linha.textContent = `${fieldLabels[campo]}: ${valor}`;
        popupData.append(linha);
    });

    console.log(valores);
    popup.showModal();
});