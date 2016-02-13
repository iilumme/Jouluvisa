VisaApp.controller('QuestionController', function (QuestionService, $scope, $location) {

    var text = document.getElementById('tyypithere').innerHTML;
    var osallistujat = text.split(",");


    var div = angular.element($('#pisteet'));
    for (var i = 0; i < osallistujat.length; i++) {
        var text = document.createTextNode(osallistujat[i]);
        var label = document.createElement('label');
        label.id = i;
        label.setAttribute('style', 'margin-right: 5px');
        var button = document.createElement('button');
        var a = "addpoint(" + label.id + ")";
        button.setAttribute('class', 'btn btn-default');
        button.setAttribute('onclick', a);
        button.setAttribute('style', 'margin-right: 10px');
        button.setAttribute('size', '2');
        button.appendChild(document.createTextNode('+1'));
        label.appendChild(text);
        div.append(label);
        div.append(button);
    }

    var atm = 0;
    var show = false;

    $scope.show = function () {
        return show;
    };

    $scope.kysymys = QuestionService.getQuestion(atm);

    $scope.showVastaus = function () {
        show = true;
        $scope.vastaus = QuestionService.getAnswer(atm);
    };

    $scope.seuraava = function () {
        show = false;
        atm += 1;
        if (atm == 23) {
            $location.path('/finaali');
        }
        $scope.kysymys = QuestionService.getQuestion(atm);
        $scope.vastaus = QuestionService.getAnswer(atm);

    };
});
