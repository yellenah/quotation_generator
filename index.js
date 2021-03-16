function generateQuote(category) {
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

    var beginningsEng = [
        "Never",
        "You just need to",
        "You will find happyness when you",
        "Having a friend means to",
        "Having no friends means to",
        "To be a man or to",
        "In the future you need to",
        "It is okay to",
        "To buy with money is like to",
        "In the end, you have known good to",
        "It is hard to"
    ];
    var middlesEng = [
        "have enough time",
        "take advice for granted",
        "tell the wrong thing",
        "love truly",
        "dream big",
        "be sad sometimes",
        "disappoint yourself",
        "succeed in every field",
        "understand the word 'sorry'",
        "dance, sing and be happy",
        "be the same, be special, be free and be yourself"
    ];
    
    var endingsEng = [
        "because that is the only right thing to do",
        "but only if you listen to your heart",
        "or wish for nothing more",
        "but not to be confident",
        "unless you want eternal sorrow",
        "and you will live a happy life",
        "because that's the only way you can succeed",
        "because, either you are, or you are not",
        "so that you have nothing to be ashamed of",
        "but even then love is the only impeller"
    ];

    
    var i1 = Math.round(Math.random() * (beginnings.length - 1));
    var i2 = Math.round(Math.random() * (middles.length - 1));
    var i3 = Math.round(Math.random() * (endings.length - 1));
    
    if(category == "1")
        var quote = beginnings[i1] + " " + middles[i2] + ", " + endings[i3] + ".";
    else 
        var quote = beginningsEng[i1] + " " + middlesEng[i2] + ", " + endingsEng[i3] + ".";
    return quote;
    
}

function addQuotes() {
    var numberOfQuotes = document.getElementById("numberOfQuotes").value;
    if(numberOfQuotes == "") {
        alert("Please enter the number of quotes.");
        return;
    }
    var category = document.getElementById("category").value;
    if(category == "") {
        alert("Please enter the desired category.");
        return;
    }
    var wrapper = document.getElementById("quotesWrapper");
    wrapper.innerHTML = "";
    for(var i = 0; i < numberOfQuotes; i++) {
        var quote = generateQuote(category);
        var elem = document.createElement("h3");
        elem.setAttribute("align", "center");
        elem.innerHTML = quote;
        wrapper.appendChild(elem);
    }
}