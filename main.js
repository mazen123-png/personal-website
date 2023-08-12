let toggleIcon = document.getElementById("toggle-icon")
let navLinks = document.getElementById("nav-link")
let username = document.getElementById("name")
let email = document.getElementById("email")
let message = document.getElementById("message")
let messageLabel =document.getElementById("messageLabel")
let emailLabel =document.getElementById("emailLabel")
let userLabel =document.getElementById("nameLabel")
let chatLink = document.getElementById("chatLink")
let contactLinks = document.getElementById("contactLinks")
let whatsappLink = document.getElementById("whatsappLink")
let messengerLink = document.getElementById("messengerLink")
let telegramLink = document.getElementById("telegramLink")
if(innerWidth >= 1024){
    navLinks.style.display = 'flex'
}else{
    navLinks.style.display = 'none'
}
toggleIcon.onclick = () =>{
    if(navLinks.style.display == 'none'){
        navLinks.style.display = "flex"
        toggleIcon.className = 'fa-solid fa-circle-xmark'
    }else if(navLinks.style.display == 'flex'){
        navLinks.style.display = 'none'
        toggleIcon.className = 'fa-solid fa-list'
    }
}


function switchAnimation(input,label){
    if(input.value != ''){
    label.style.cssText =
    `
        font-size: 14px;
        top: -15px;
    `
    }else{
        label.style.cssText =
        `
            font-size:20px;
            position: absolute;
            left: 5px;
            top: 0;
        `
    }
}
username.onkeyup = () => {
    switchAnimation(username,userLabel)
}
email.onkeyup = () =>{
    switchAnimation(email,emailLabel)
}
message.onkeyup = () =>{
    switchAnimation(message,messageLabel)
}

    
/* chat logo pressed */ 

chatLink.onclick = function(){
    if(whatsappLink.style.display == 'none'){
        whatsappLink.style.display = 'block'
        messengerLink.style.display = 'block'
        telegramLink.style.display = 'block'
    }else{
        whatsappLink.style.display = 'none'
        messengerLink.style.display = 'none'
        telegramLink.style.display = 'none'
    }
}
let goUp = document.getElementById("containGoback")
onscroll = () =>{
    if(scrollY >= 150){
        goUp.style.display = 'block'
    }else{
        goUp.style.display = 'none'
    }
}
goUp.onclick = () =>{
    scrollTo({
        top:0
    })
}



const textContainer = document.getElementById('textContainer');
let containText = document.getElementById('containText')
let isDeleting = false;
const phrases = [
"Mazen Mahmoud",
"Front end developer",
"Graphic Designer"
];
let phraseIndex = 0;
let charIndex = 0;
function typeWriter() {
const currentPhrase = phrases[phraseIndex];
const currentText = currentPhrase.slice(0, charIndex);

textContainer.textContent = currentText + '|';

if (!isDeleting) {
    charIndex++;
    if (charIndex > currentPhrase.length) {
    isDeleting = true;
    charIndex = currentPhrase.length;
    setTimeout(typeWriter, 1000);
    } else {
    setTimeout(typeWriter, 150);
    }
} else {
    charIndex--;
    if (charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(typeWriter, 50);
}
}

typeWriter();
