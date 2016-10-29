angular.module('starter.controllers', [])
.run(function($rootScope){
  $rootScope.stylePath='css/ColorBlind.min.css';
})

.controller('DashCtrl', function($scope,$rootScope) {
  $rootScope.stylePath = 'css/ColorBlind.min.css';
  $scope.settings = {
    daltonic: true
  };

  $scope.toggleMode = function(){
    console.log("Daltonic mode = "+$scope.settings.daltonic);
    if($scope.settings.daltonic==true){
      $rootScope.stylePath = 'css/ColorBlind.min.css';
    }else{
      $rootScope.stylePath = 'css/ionic.app.min.css';
    }
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
