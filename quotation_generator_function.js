var beginnings = [
    "Nikada nemoj",
    "Potrebno je samo",
    "Sreću ćeš pronaći tako što ćeš",
    "Imati prijatelja znači",
    "Nemati prijatelja znači",
    "Biti čovek ili",
    "U svojoj budućnosti treba",
    "Mala je razlika između",
    "Kupiti novcem je kao",
    "Naposletku, ti si dobro znao",
    "Teško je"
];

var middles = [
    "imati dovoljno vremena",
    "uzeti savet zdravo za gotovo",
    "reći pogrešnu stvar",
    "voleti punim plućima",
    "sanjati velike snove",
    "ponekad biti tužan",
    "razočarati samog sebe",
    "uspeti na svim poljima",
    "razumeti reč 'izvini'",
    "igrati, pevati i radovati se",
    "biti isti, biti poseban, biti slobodan i biti samo svoj"
];

var endings = [
    "jer to je jedino ispravno",
    "ali samo ako slušaš svoje srce",
    "ili ne poželeti ništa više",
    "ali ne biti samouveren",
    "osim ako ne želiš večnu tugu",
    "i živećeš srećan život",
    "jer samo tako možeš uspeti",
    "jer, ili jesi, ili nisi",
    "tako da nema čega da te bude sramota",
    "ali i tada je ljubav jedini pokretač"
];

var i1 = Math.round(Math.random() * (beginnings.length - 1));
var i2 = Math.round(Math.random() * (middles.length - 1));
var i3 = Math.round(Math.random() * (endings.length - 1));

var quote = beginnings[i1] + " " + middles[i2] + ", " + endings[i3] + ".";

console.log(quote);
