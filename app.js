angular.module('oppmap', ['uiGmapgoogle-maps'])

.controller('mapController', function($scope, $http) {
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
      var marker = {
        id: i,
        coords: {
          latitude: company.geo.latitude,
          longitude: company.geo.longitude,
        },
        title: company.company,
        show: false
      };

      return marker;
    }
    companies = companies.filter(needGeo);
    markers = companies.map(makeMarker);

    return markers;
  }

  $scope.map = {
    center: {
      latitude: 39.984,
      longitude: -75.163
    },
    zoom: 11
  };

});
