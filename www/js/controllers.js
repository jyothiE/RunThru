angular.module('starter.controllers', ['ngOpenFB'])

.controller('AppCtrl', function($scope, $ionicModal,  $location, $timeout, ngFB, $state) {
  $scope.fbLogin = function () {
    ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
        function(response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                $scope.closeLogin();
                $location.path('/profile');                
              
            } else {
                alert('Facebook login failed');
            }
        });
  }
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
// .controller('registrationCtrl', function($scope, $location, $http) {

//       $scope.go = function( path ) {
//         $location.path( path );
//       }
//        // $http({
//        //    method: 'GET',
//        //    url: 'http://echo.jsontest.com/key/value/one/two'
//        //    }).then(function successCallback(response) {
//        //      console.log(response);
//        //    }, function errorCallback(response) {
//        //      console.log(response);
//        //    });
//        //    $http.post('http://echo.jsontest.com/key/value/one/two', data, config).then(successCallback, errorCallback);

// })
.controller('ProfileCtrl', function($scope, ngFB) {
    ngFB.api({
        path: '/me',
        params: {fields: 'id,name'}
    }).then(
        function (user) {
            $scope.user = user;
            //$scope.city = city;
        },
        function (error) {
            alert('Facebook error: ' + error.error_description);
        });
})
.controller("ExampleController", function ($scope, $cordovaCamera) {

                $scope.takePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                }
                
                $scope.choosePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                }
            })
.controller('registrationCtrl', ['$scope','$location','custumServ', function ($scope,$location,custumServ) {
        $scope.go = function( path ) {
        $location.path( path );
      }
      $scope.user=custumServ.getUserDetails();
      console.log($scope.user);
    }])
//   .controller('registrationCtrl', ['custumServ', function (custumServ) {
//     console.log(custumServ.user);
  
// }]);
    



