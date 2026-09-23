const fundopretonocheck = document.querySelector('#fundopretonocheck');
fundopretonocheck.classList.remove('fundopretonocheck')
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
const captchaBotoes = document.querySelectorAll('#captchafeiki #btns button[data-car]');
const captchaResultado = document.getElementById('resultado');
const captchaVerificar = document.getElementById('verificar');
let captchaVerificado = false;


form.addEventListener('submit', (event) => {
    event.preventDefault();

    fundopretonocheck.classList.add('fundopretonocheck');
    document.querySelector('#captchafeiki').style.display = 'flex';
    captchaVerificado = false;
    captchaResultado.textContent = '';
});

function abrirModalComDados() {
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
        situa: document.getElementById('ass').value,
        raiz: document.getElementById('raiz').value,
        gostou: document.getElementById('gostou').value
    };

    popupData.replaceChildren();
    Object.entries(resenha).forEach(([campo, valor]) => {
        const linha = document.createElement('p');
        linha.className = 'popupdatarow';
        linha.textContent = `${campo}: ${valor}`;
        popupData.append(linha);
    });

    popup.showModal();
}
captchaBotoes.forEach(function (button) {
    button.addEventListener('click', function () {
      button.classList.toggle('selecionada');
      button.setAttribute('aria-pressed', button.classList.contains('selecionada'));
      captchaVerificado = false;
      captchaResultado.textContent = '';
    });
});

captchaVerificar.addEventListener('click', function () {
    const correto = [...captchaBotoes].every(function (button) {
      return button.classList.contains('selecionada') === (button.dataset.car === 'true');
    });

    captchaVerificado = correto;
    captchaResultado.textContent = correto ? 'Verificação concluída.' : 'Resposta incorreta.';
    captchaResultado.className = correto ? 'captcha-sucesso' : 'captcha-erro';

    if (correto) {
        fundopretonocheck.classList.remove('fundopretonocheck');
        document.querySelector('#captchafeiki').style.display = 'none';
        abrirModalComDados();
    }
});