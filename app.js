const btnFlechesRight = document.querySelectorAll('.btn_fleche_right');
const btnFlechesDown = document.querySelectorAll('.btn_fleche_down');
const divSections = document.querySelectorAll('.div_section');
const headerSections = document.querySelectorAll('section header');
const lettersNav = document.querySelectorAll('header nav li a');
const colors = ['#B660A2', '#1A91B2', '#F6A415', '#71A167', '#ED6666', '#ED6E34'];


function getRandomNumber() {
    return Math.round(Math.random() * 5);
}

function colorHeader() {
    for (let headerSection of headerSections) {
        let i = getRandomNumber(); // Génère un nombre aléatoire à chaque itération
        headerSection.style.backgroundColor = colors[i];
    }
}

colorHeader();

for (let i = 0; i < btnFlechesRight.length; i++) {
    btnFlechesRight[i].addEventListener('click', () => {
        // Trouver la section correspondante et basculer sa visibilité
        let divSection = divSections[i];
        divSection.classList.toggle('hidden');

        // Basculer la visibilité des boutons correspondants
        btnFlechesRight[i].classList.toggle('hidden');
        btnFlechesDown[i].classList.toggle('hidden');
    });

    btnFlechesDown[i].addEventListener('click', () => {
        // Trouver la section correspondante et basculer sa visibilité
        let divSection = divSections[i];
        divSection.classList.toggle('hidden');

        // Basculer la visibilité des boutons correspondants
        btnFlechesRight[i].classList.toggle('hidden');
        btnFlechesDown[i].classList.toggle('hidden');
    });
}

function handelScroll() {
    const header = document.querySelector('body header');
    const btnFlecheUp = document.getElementById('btn-up');

    if (document.documentElement.scrollTop > 100) {
        header.classList.add('minimized');
        btnFlecheUp.classList.remove('hidden');
    } else {
        header.classList.remove('minimized');
        btnFlecheUp.classList.add('hidden');
    }
}

window.onscroll = () => {
    handelScroll();
}

document.getElementById("btn-up").addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})