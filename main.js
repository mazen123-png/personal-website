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


let loader = document.getElementById('preloader')
setTimeout(() =>{
    loader.style.display = 'none'
},1000)

// change mood of the page
let setting_btn = document.getElementById('setting-btn')
let settingSection = document.getElementById('settingSection')
let containAllElements = document.getElementById('containAll')
let lightMood = document.getElementById('fa-sun')
let darkMood = document.getElementById('fa-moon')
let elements = document.getElementsByClassName('allElements')
let element1 = document.getElementsByClassName('contactForm')
let linksItem = document.getElementsByClassName('item')
let labels = document.getElementsByClassName('label')
let form = document.getElementById('form')
let cards = document.getElementsByClassName('card')
let elementwithorangeColor = document.getElementsByClassName('orangeColor')
let btns = document.getElementsByClassName('btn-primary')
let circle_spin = document.getElementById('circle-spin')
let about_me = document.getElementById('about-me')
let aboutLinks = document.getElementsByClassName('link')
let forntEnd = document.getElementById('fornt-end')
let header = document.getElementById('header');
setting_btn.onclick = ()=>{
    containAllElements.classList.add('none')
    settingSection.classList.remove('none')
}

lightMood.onclick = ()=>{
    alert('are you sure')
    containAllElements.classList.remove('none')
    settingSection.classList.add('none')
    document.body.classList.add('lightMood1')
    element1[0].classList.add('lightMood2')
    form.style.backgroundColor = '#ff7f00'
    header.style.backgroundColor = '#ff6800'
    circle_spin.style.cssText = `
        border-top: .2rem solid #4ff4a2;
        border-bottom: .2rem solid #4ff4a2;
    `
    forntEnd.style.color = 'red'
    about_me.style.color = '#222'
    for(let i = 0;i<aboutLinks.length;i++){
        aboutLinks[i].classList.add('lightMoodColor1')
    }
    for(let i =0;i<elements.length;i++){
        if(i % 2==0){
            elements[i].classList.add('lightMood1')
        }else{
            elements[i].classList.add('lightMood2')
        }   
    }
    for(let i = 0;i < btns.length;i++){
        btns[i].classList.add('lightMood2')
    }
    for(let i = 0;i<elementwithorangeColor.length;i++){
        elementwithorangeColor[i].classList.add('lightMoodColor1')
    }
    for(let i = 0;i< linksItem.length;i++){
        linksItem[i].classList.add('lightMoodColor2')
    }
    for(let i = 0;i< cards.length;i++){
        cards[i].classList.add('lightMood2')
    }
    for(let i = 0;i< linksItem.length;i++){
        labels[i].classList.add('lightMoodColor2')
    }
    
}
darkMood.onclick = ()=>{
    alert('are you sure')
    containAllElements.classList.remove('none')
    settingSection.classList.add('none')
    document.body.classList.remove('lightMood1')
    element1[0].classList.remove('lightMood2')
    form.style.backgroundColor = '#112e42'
    header.style.backgroundColor = '#0c192c'
    circle_spin.style.cssText = `
        border-top: .2rem solid #112e42;
        border-bottom: .2rem solid #112e42;
    `
    forntEnd.style.color = 'transparent'
    about_me.style.color = '#00abf0'
    for(let i = 0;i<aboutLinks.length;i++){
        aboutLinks[i].classList.remove('lightMoodColor1')
    }
    for(let i =0;i<elements.length;i++){
        elements[i].classList.remove('lightMood1')
        elements[i].classList.remove('lightMood2')
          
    }
    for(let i = 0;i < btns.length;i++){
        btns[i].classList.remove('lightMood2')
    }
    for(let i = 0;i<elementwithorangeColor.length;i++){
        elementwithorangeColor[i].classList.remove('lightMoodColor1')
    }
    for(let i = 0;i< linksItem.length;i++){
        linksItem[i].classList.remove('lightMoodColor2')
    }
    for(let i = 0;i< cards.length;i++){
        cards[i].classList.remove('lightMood2')
    }
    for(let i = 0;i< linksItem.length;i++){
        labels[i].classList.remove('lightMoodColor2')
    }
}