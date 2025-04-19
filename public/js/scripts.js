/* Configurando o Slider*/ 

let imgSlider = document.querySelectorAll ('.slider-container .slider-box'); 
let btnProx = document.querySelector ('#proxima');
let btnAnter = document.querySelector ('#anterior');
let btnNav = document.querySelectorAll ('.btn-nav-box .btn-nav');

/* Variáveis de controle */
let contadorImg = imgSlider.length; 
let imgAtiva = 0;

btnProx.addEventListener ('click', ()=>{
    imgAtiva++;
    if (imgAtiva >= contadorImg) {
        imgAtiva = 0;
    }
    mostrarSlider();
})

btnAnter.addEventListener ('click', ()=>{
    imgAtiva--;
    if (imgAtiva < 0) {
        imgAtiva = contadorImg - 1;
    }
    mostrarSlider();
})

/* Função para mostrar o slider a funcionar */
function mostrarSlider () {
    let antigaImg = document.querySelector ('.slider-container .slider-box.ativo');
    let antigoBtnNav = document.querySelector ('.btn-nav-box .btn-nav.ativo');

    antigaImg.classList.remove ('ativo');
    antigoBtnNav.classList.remove ('ativo');

    imgSlider [imgAtiva].classList.add ('ativo');
    btnNav [imgAtiva].classList.add ('ativo');
}

btnNav.forEach((btn, indice)=>{
    btn.addEventListener ('click', ()=>{
        imgAtiva = indice;

        mostrarSlider();
    });
});

/*Configurando a tela de login*/

document.addEventListener ('DOMContentLoaded', function () {

    const form = document.getElementById ('mainForm');
    const nome = document.getElementById ('nome');
    const email = document.getElementById ('email');
    const telefone = document.getElementById ('telefone');
    const cursos = document.getElementById ('cursos');
    const senha = document.getElementById ('senha');
    const mensagem = document.getElementById ('mensagem');

    form.addEventListener ('submit', function (e) {
        e.preventDefault();
        if (checkInputs()) {
            mostrarModal();
        }
    });

    nome.addEventListener ('input', ()=>{
        validateField(nome, nome.value.trim() !== '','O nome não pode estar vazio');
    });
    
    email.addEventListener('input', ()=>{
        validateField(email, isEmail(email.value.trim()), 'Email inválido');
    });
    
    telefone.addEventListener('input', ()=>{
        validateField(telefone, isTelefone(telefone.value.trim()), 'Número de telefone inválido');
    });

    cursos.addEventListener('input', ()=>{
        validateField(cursos, isCursos(cursos.value.trim()), 'Escolha um curso');
    });
    
    senha.addEventListener('input', ()=>{
        validateField(senha, senha.value.trim().length >= 8, 'A senha deve possuir no mínimo 8 caracteres!')
    });

    mensagem.addEventListener ('input', ()=>{
        validateField(mensagem, mensagem.value.trim() !== '','A caixa de mensagem não pode estar vazio');
    });

    function checkInputs(){
        let isValid = true;
        validateField(nome, nome.value.trim() !== '','O nome não pode estar vazio');
        validateField(email, isEmail(email.value.trim()), 'Email inválido');
        validateField(telefone, isTelefone(telefone.value.trim()), 'Número de telefone inválido');
        validateField(cursos, isCursos(cursos.value.trim()), 'Escolha um curso');
        validateField(senha, senha.value.trim().length >= 8, 'A senha deve possuir no mínimo 8 caracteres!');
        validateField(mensagem, mensagem.value.trim() !== '','A caixa de mensagem não pode estar vazio');

        document.querySelectorAll('.form-control').forEach((control) => {
            if(control.classList.contains('erro')){
                isValid = false;
            }
        });
        return isValid;

    }

    function validateField (input, condition, erroMensagem){
        if(condition){
            setSuccess(input);
        }else{
            setError(input, erroMensagem);
        }
    }

    function setError (input, mensagem){
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control erro';
        icon.className = 'icon &tritime';
        input.placeholder = mensagem;
    }

    function setSuccess (input){
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control sucesso';
        icon.className = 'icon fas fa-check-circle';
    }

    function isEmail (email){
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    }

    function isTelefone (telefone){
        return /^\+?(\d.*){3,}$/.test(telefone);
    }

    function mostrarModal(){
        const modal = document.getElementById('.sucessoModal');
        modal.style.display = 'block';

        const fecharBtn = document.querySelector('.fehar-button');
        fecharBtn.onclick = function () {
            modal.style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target === modal){
                modal.style.display = 'none';
            }
        };
    }

});
