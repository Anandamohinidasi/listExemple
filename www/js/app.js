// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'autocomplete'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('MyCtrl', function($scope, $ionicModal) {
 $scope.shouldShowReorder = false;
 $scope.listCanSwipe = true;
 $scope.shouldShowDelete = false;
 
 $scope.delete = function(){
  if($scope.shouldShowDelete){
   $scope.shouldShowDelete = false;
  }else{
   $scope.shouldShowDelete = true;
  }
 }
 $scope.contacts = [
   {
     title: 'first grocerry',
     description: 'wonderfull grocerry',
     img: 'img/1.jpg'
   },
    {
     title: 'sec grocerry',
     description: 'wonderfull grocerry',
     img: 'img/2.jpg'
   },
    {
     title: '3trd grocerry',
     description: 'wonderfull grocerry',
     img: 'img/3.jpg'
   },
    {
     title: '4th grocerry',
     description: 'wonderfull grocerry',
     img: 'img/4.jpg'
   },
    {
     title: '5th grocerry',
     description: 'wonderfull grocerry',
     img: 'img/5.jpg'
   }
   ];
   

  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
   $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.createContact = function(u) {     
    var pics = [
     'img/7.jpg', 'img/6.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg'
     ];
    var item = pics[Math.floor(Math.random()*pics.length)];
    $scope.contacts.unshift({ title: u.firstName , description: u.lastName, img: item});
    $scope.modal.hide();
  };
  
   $scope.movies = ["Gulabjamum",
                        "chocolate",
                        "Krsna",
                        "Haribol",
                        "icecream",
                        'burff',
                        'sandesh',
                        'rasagula',
                        'cake',
                        'sweet rice',
                        'any sweet'];

        // gives another movie array on change
        $scope.updateMovies = function(typed){
            // MovieRetriever could be some service returning a promise
            $scope.newmovies = MovieRetriever.getmovies(typed);
            $scope.newmovies.then(function(data){
              $scope.movies = data;
            });
        };
})