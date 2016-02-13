VisaApp.controller('StartController', function ($scope) {

    var osallistujat;
    var show = false;

    $scope.setOsallistujat = function () {
        if ($scope.osallistujat != "") {
            osallistujat = $scope.osallistujat;
            var div = angular.element($('#osallistujat'));
            div.empty();
            div.append(document.createElement('hr'));
            var h = document.createElement('H4');
            var text = document.createTextNode("Lisää nimet");
            h.appendChild(text);
            div.append(h);
            for (var i = 0; i < osallistujat; i++) {
                var input = angular.element('<input onblur="savename(this.value)" size="15" style="margin-right: 10px">');
                div.append(input);
            }
            show = true;
        }
        
    }

    $scope.show = function () {
        return show;
    }
});