// Récupération des bouttons des époques
let btn_histoire_antiquite = document.getElementById('btn-histoire-antiquite');
let btn_histoire_moyen_age = document.getElementById('btn-histoire-moyen-age');
let btn_histoire_a_nos_jours = document.getElementById('btn-histoire-a-nos-jours');

// Récupération des sections des époques
let section_histoire_antiquite = document.getElementById('histoire-antiquite');
let section_histoire_moyen_age = document.getElementById('histoire-moyen-age');
let section_histoire_a_nos_jours = document.getElementById('histoire-a-nos-jours');

// Affichage par défaut
btn_histoire_antiquite.classList.add('active-button');
section_histoire_antiquite.style.display = 'flex';
section_histoire_moyen_age.style.display = 'none';
section_histoire_a_nos_jours.style.display = 'none';

// Quand on clique sur un boutton, on affiche la section correspondante
btn_histoire_antiquite.addEventListener('click', function() {
    btn_histoire_antiquite.classList.add('active-button');
    btn_histoire_moyen_age.classList.remove('active-button');
    btn_histoire_a_nos_jours.classList.remove('active-button');
    section_histoire_antiquite.style.display = 'flex';
    section_histoire_moyen_age.style.display = 'none';
    section_histoire_a_nos_jours.style.display = 'none';
});

btn_histoire_moyen_age.addEventListener('click', function() {
    btn_histoire_antiquite.classList.remove('active-button');
    btn_histoire_moyen_age.classList.add('active-button');
    btn_histoire_a_nos_jours.classList.remove('active-button');
    section_histoire_antiquite.style.display = 'none';
    section_histoire_moyen_age.style.display = 'flex';
    section_histoire_a_nos_jours.style.display = 'none';
});

btn_histoire_a_nos_jours.addEventListener('click', function() {
    btn_histoire_antiquite.classList.remove('active-button');
    btn_histoire_moyen_age.classList.remove('active-button');
    btn_histoire_a_nos_jours.classList.add('active-button');
    section_histoire_antiquite.style.display = 'none';
    section_histoire_moyen_age.style.display = 'none';
    section_histoire_a_nos_jours.style.display = 'flex';
});