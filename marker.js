angular.module('oppmap', ['uiGmapgoogle-maps'])

.controller('mapController', function($scope, $http) {
  $scope.map = {
    center: {
      latitude: 39.984,
      longitude: -75.163
    },
    zoom: 11
  };

  $scope.marker = {
    id: "1",
    coords: {
      latitude: 39.984,
      longitude: -75.163,
    },
    title: "Philadelphia",
    show: false
  };

  $scope.windowOptions = {
    visible: false
  };

  $scope.onClick = function(clickedMarker) {
    $scope.windowOptions.visible = !$scope.windowOptions.visible;
    //$scope.title = clickedMarker.title;
  };

  $scope.closeClick = function() {
    $scope.windowOptions.visible = false;
  };

  $scope.title = "Window Title!";
});
