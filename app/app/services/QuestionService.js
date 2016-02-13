VisaApp.service('QuestionService', function () {
    var questions = [
        {id: 1, kysymys: "Mikä valtio otti käyttöön euron tänä vuonna?"},
        {id: 2, kysymys: "Mikä valtio voitti Jääkiekon MM 2015?"},
        {id: 3, kysymys: "Kehärata avattiin tänä vuonna. Mitkä junat menevät Kehärataa pitkin?"},
        {id: 4, kysymys: "Mikä käyttöjärjestelmä julkaistiin 29. heinäkuuta 2015?"},
        {id: 5, kysymys: "2015 syntyi kaksi kuninkaallista Euroopassa. Mitkä heidän etunimensä ovat?"},
        {id: 6, kysymys: "Mainitse 3 suuren luokan elokuvaa, jotka julkaistiin tänä vuonna."},
        {id: 7, kysymys: "Kuinka monta vuotta Sibeliuksen syntymästä on?"},
        {id: 8, kysymys: "Derivoi 4x^2 + x - 7."},
        {id: 9, kysymys: "Mikä on Ilkka Remeksen oikea nimi?"},
        {id: 10, kysymys: "Mikä saniainen tämä on?", kuva: "img/saniainen.png"},
        {id: 11, kysymys: "Kuinka monta itsenäistä valtiota maapallolla on?", vaihtoehdot: "a) 117 b) 195 c) 263 d) 302"},
        {id: 12, kysymys: "Mikä noin suurin piirtein on maapallon säde ?", vaihtoehdot: "a) 6300km b) 7200km c) 10 000km d) 6500km"},
        {id: 13, kysymys: "Kuinka monta planeettaa Aurinkokunnassa on?"},
        {id: 14, kysymys: "Mikä on 100 metrin jouksun maailmanennätysaika?", vaihtoehdot: "a) 10,21s b) 9,92s c) 9,58s d) 9,83s"},
        {id: 15, kysymys: "Minä vuonna tämä ennätys on tehty?", vaihtoehdot: "a) 2003 b) 2011 c) 2008 d) 2009"},
        {id: 16, kysymys: "Minä päivänä tänä vuonna päivä oli lyhimmillään?"},
        {id: 17, kysymys: "Onko timanttien hinta laskenut vai noussut?"},
        {id: 18, kysymys: "Minä vuonna ensimmäinen Indiana Jones elokuva on julkaistu?", vaihtoehdot: "a) 1975 b) 1988 c) 1981 d) 1979"},
        {id: 19, kysymys: "Mihinkä asiaan Forrest Gump vertasi elämää?", vaihtoehdot: "a) suklaarasiaan b) höyheneen c) linja-autoon d) odottamiseen"},
        {id: 20, kysymys: "Minä vuonna Titanic upposi?", vaihtoehdot: "a) 1910 b) 1918 c) 1912 d) 1905 "},
        {id: 21, kysymys: "Minä vuonna Titanicin hylky löydettiin?", vaihtoehdot: "a) 1938 b) 1985 c) 1958 d) 1977"},
        {id: 22, kysymys: "Kuka on Suomen ulkoministeri?", vaihtoehdot: "a) Juha Sipilä b) Arttu Piippu c) Timo Soini d) Alexander Stubb"},
        {id: 23, kysymys: "Kuka oli tasavallan presidentti Urho Kekkosen jälkeen?", vaihtoehdot: "a) Mauno Koivisto b) Martti Ahtisaari c) Tarja Halonen "}];

    var answers = [
        {id: 1, vastaus: "Liettua"},
        {id: 2, vastaus: "Kanada"},
        {id: 3, vastaus: "I ja P"},
        {id: 4, vastaus: "Windows 10"},
        {id: 5, vastaus: "Charlotte ja Nicolas"},
        {id: 6, vastaus: "Jurassic World, Fast & Furious 7, Avengers: Age of Ultron, Kätyrit, Inside Out – mielen sopukoissa, 007 Spectre, Mission: Impossible – Rogue Nation, Nälkäpeli – Matkijanärhi, osa 2, Yksin Marsissa, Fifty Shades of Grey, Star Wars: The Force Awakens"},
        {id: 7, vastaus: "150"},
        {id: 8, vastaus: "8x + 1"},
        {id: 9, vastaus: "Petri Pykälä"},
        {id: 10, vastaus: "Kotkansiipi"},
        {id: 11, vastaus: "b) 195"},
        {id: 12, vastaus: "a) 6300km"},
        {id: 13, vastaus: "8"},
        {id: 14, vastaus: "c) 9,58s"},
        {id: 15, vastaus: "d) 2009"},
        {id: 16, vastaus: "22.12.2015"},
        {id: 17, vastaus: "laskenut"},
        {id: 18, vastaus: "c) 1981"},
        {id: 19, vastaus: "a) suklaarasiaan"},
        {id: 20, vastaus: "c) 1912"},
        {id: 21, vastaus: "b) 1985"},
        {id: 22, vastaus: "c) Timo Soini"},
        {id: 23, vastaus: "a) Mauno Koivisto"}
    ];
    this.getQuestion = function (i) {
        return questions[i];
    };
    this.getAnswer = function (i) {
        return answers[i];
    };
});

