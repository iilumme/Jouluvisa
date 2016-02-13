VisaApp.controller('FinalController', function ($scope) {

    points();
    var text = document.getElementById('tyypithere').innerHTML;
    var osallistujat = text.split(",");


    var t = document.getElementById('pisteethere').innerHTML;
    var pisteet = t.split(",");
    console.log(pisteet);
    

    var div = angular.element($('#lopputulokset'));
    for (var i = 0; i < osallistujat.length; i++) {

        var h = document.createElement('H4');
        var text = document.createTextNode(osallistujat[i]);
        h.appendChild(text);
        h.setAttribute('id', 'nimii');

        var p = document.createElement('p');
        var ptext = document.createTextNode('Sait pisteitä yhteensä: ' + pisteet[i]);
        p.appendChild(ptext);

        var tDiv = document.createElement('div');
        tDiv.className = 'caption';
        tDiv.setAttribute('id', 'pisteboxi');
        tDiv.appendChild(h);
        tDiv.appendChild(p);


        var sDiv = document.createElement('div');
        sDiv.className = 'thumbnail';
        sDiv.appendChild(tDiv);
        
        var fDiv = document.createElement('div');
        sDiv.className = 'col-sm-6 col-md-3';
        fDiv.appendChild(sDiv);
        

        div.append(fDiv);

    }
    
    deleteosallistujat();

});