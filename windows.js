angular.module('oppmap', ['uiGmapgoogle-maps'])

.controller('mapController', function($scope, $http) {

  $scope.currentCompany = null;

  $scope.onClick = function(marker, eventName, model) {
    console.log("Clicked! " + model.company);
    $scope.currentCompany = model;
  };

  $http.get('./all-companies.json').success(function(data) {
    $scope.markers = convertOpportunities(data);
  });

  var convertOpportunities = function(companies) {
    var markers = [];
    var companyCount = 0;
    var needGeo = function(company) {
      if ('geo' in company) {
        return true;
      } else {
        return false;
      }
    };
    var makeMarker = function(company) {
      var i = companyCount++;
      company.id = i;
    }
    companies = companies.filter(needGeo);
    companies.forEach(makeMarker);

    return companies;
  }

  $scope.map = {
    center: {
      latitude: 39.953,
      longitude: -75.165
    },
    zoom: 13
  };

});
