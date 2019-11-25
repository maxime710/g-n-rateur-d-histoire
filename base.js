var lieux = ['Tombouctou', 'Lille', 'Sataya', 'Montcuq', 'Paris' , 'Batcave', 'Maubeuge', 'Réacteur nucléaire',
    'Martinique', 'Balamb garden', "L'enfer", 'Montbeilard', 'Namek', 'Londres', 'Une île', 'Une cave', 'le Caire',
    'New York', 'Le tampon', 'Berlaimont',];

var temperatures = [30, 24, -273.15, 21, 42, -38, 35, 584, -8000, 28, 20, 37.2, -30, 35, "hot", 27, -100, 55 ];

var noms = ["Babe", "Paul", "Clodomir", "George", "Brigitte", "Homer-Simpson", "Kylian", "Georges-Clooney",
    "Quintus", "Anais", "Styvens", "Keen-V", "Ludovic", "Yoshi", "Lucifer", "Pumba", "Eglantine", "Cayde-6", "Poutine", "Squall"];

var objet = ['valise', 'poivrier connecté', 'épée', 'cahier', 'pneu', 'table', 'godsabre', 'truelle', 'madelaine', 'trident', 'pull rose',
    'pc', 'tisonnier', 'guimbarde', 'chandelier', 'verre', 'table bancale', 'arbre', 'souris, dague'];

var verbes = ['Danser' ,'Frapper' ,'Lubrifier', 'Trikiter', 'Procrastiner', 'Foutre', 'Prendre', 'Nager',
    'Recoudre', 'Punir', 'Attaquer', 'Coder', 'Jouer', 'Manger', 'Avoir'];



function lieuxRandom() {
    var valeur = lieux[Math.floor(Math.random()*lieux.length)];
    return valeur;
}
function temperaturesRandom() {
    var valeur2 = temperatures[Math.floor(Math.random()*temperatures.length)];
    return valeur2;
}
function nomsRandom() {
    var valeur3 = noms[Math.floor(Math.random()*noms.length)];
    return valeur3;
}
function objetRandom() {
    var valeur4 = objet[Math.floor(Math.random()*objet.length)];
    return valeur4;
}
function verbesRandom() {
    var valeur5 = verbes[Math.floor(Math.random()*verbes.length)];
    return valeur5;
}


var btn = document.getElementById("btn");
var story = document.getElementById("story");



btn.addEventListener('click', function H()
{
    story.innerHTML = nomsRandom()+' '+verbesRandom()+' '+'un(e)'+objetRandom()+' '+'à'+' '+lieuxRandom()+' '+'car il fait'+' ' +temperaturesRandom()+'°C';
});