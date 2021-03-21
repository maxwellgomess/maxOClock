function carregar() {
    
var msg = document.querySelector('div#msg')
var img = document.querySelector('img#imagem')
var dataAtual = new Date()
var hora = dataAtual.getHours()

msg.innerHTML = `Agora são <strong>${hora} horas</strong>`

if (hora >= 6 && hora < 12) {
    img.src = "images/manha.png"
    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(215, 193, 170)'
} else if (hora >= 12 && hora < 18) {
    img.src = "images/tarde.png"
    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(254, 121, 1)'
} else {
    img.src = "images/noite.png"
    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(20, 33, 56)'
}

}

