angular.module('starter.controllers', [])

.controller('StyleCtrl', function($rootScope,$scope,$ionicModal) {
  console.log('Setting default style');

  $rootScope.activeMode = false;
  $rootScope.activeStyle='css/ionic.app.min.css';

  $rootScope.applyFilter = function(filtro){
    $rootScope.activeStyle = 'css/'+filtro+'min.css';
  };
  console.log('ActiveStyle:'+$rootScope.activeStyle);


  $ionicModal.fromTemplateUrl('ajustes.html',{
    scope: $scope,
    animation: 'slide-in-down'
  }).then(function(modal){
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  //Opciónes de filtro
  $scope.choice;
  $scope.accionar = function(choice){
    switch (choice) {
      case "protanopia":
        applyFilter("protanopia");

        break;
      default:

    }
  }

})

.controller('InicioCtrl',function($rootScope,$scope,$ionicModal){
})

.controller('RegistroCtrl',function($scope){
  console.log("Registrandose");
  $scope.datos={};
  $scope.validar=function(datos){
    if(datos.nombre && datos.email && datos.contrasena){
      console.log("Todo bien, todo bonito, fuicioso");
      $state.go('registro_finalizado')
    }else{
      alert("Todos los campos son obligatorios");
    }
  };
});
