const form = document.getElementById('form')

form.addEventListener ('submit',(e) => {
e.preventDefault ()
let nome = document.getElementById ('Nome').value;
let email = document.getElementById ('Email').value;
console.log (nome, email);
let data = {
    nome,
    email,
}
let convertData = JSON.stringify (data);

localStorage.setItem ( 'lead', convertData)

let content = document.getElementById ('content')

let carregando = '<p>carregando...</p>'

let pronto = '<p>pronto!</p>'

content.innerHTML = carregando

setTimeout(() => {
    content.innerHTML = pronto
}, 1000);

})
