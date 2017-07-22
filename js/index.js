var app = angular.module('GerryHack', [])

app.controller('MainController', ['$scope', '$http', function ($scope, $http) {

    /* State FIPS */
    $scope.stateFips = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51'];

    /* LIST OF USERS AND STREAM INFO */
    $scope.stateInfo = [];

    $scope.stateName = "";

    $scope.apiKey = "7c8981bdd62f18bf65d5b8c483252b6d1c0b7ff4";


    /* JSON call to get dataset information */
    $scope.stateFips.forEach(function (fipsCode) {
        var temp = {};
        $http.jsonp('https://api.census.gov/data/2014/acs5?get=NAME,B00001_001E&for=state:' + fipsCode + '&key=' + $scope.apiKey).success(function (data) {
            if (!("error" in data)) {
                temp = data;
                /*temp.name = data[1][0];
                temp.total = data[1][1];
                temp.fips = data[1][2];*/
            } else {
                temp.name = "error";
                temp.total = "error";
                temp.fips = "error";
            }
        });
        $scope.stateInfo.push(temp);

    });

    /* DETERMINE ONLINE 7 OFFLINE BACKGROUND COLOR */
    $scope.whichBG = function (user) {
        if (user.presence === "online") {
            return 'online';
        } else if (user.presence === "offline") {
            return 'offline';
        } else {
            return 'notfound';
        }
    }

}]);
