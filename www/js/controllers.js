angular.module('app.controllers', [])
  
.controller('controllerCtrl', ['$scope', 'LoginService', '$ionicPopup', '$state',
function ($scope, LoginService, $ionicPopup, $state){
	$scope.data = {};
	$scope.testar = function(){
		var text ='';

		//PH
		if($scope.data.ph<8.2){
		    	 text = text +'<ion-item>Ph está baixo  |<strong> ideal:8,2</strong></ion-item> ';           
		 }else{
		 	if($scope.data.ph>8.2){

                text = text +'<ion-item>Ph está alto  |<strong> ideal:8,2</strong></ion-item> ';

		 	}else{  
                if($scope.data.ph==8.2)
                text = text +'<ion-item>Ph está ótimo</ion-item> ';
		 	}
		 }
		 //nitrato
		 if($scope.data.nitratos<5.0){
		    	 text = text +'<ion-item>Nitrato está baixo  |<strong> ideal:5</strong></ion-item> ';           
		 }else{
		 	if($scope.data.nitratos>5.0){

                text = text +'<ion-item>Nitrato está alto  |<strong> ideal:5</strong></ion-item> ';

		 	}else{  
                if($scope.data.nitratos==5.0)
                text = text +'<ion-item>Nitrato está ótimo </ion-item> ';
		 	}
		 }
		 //Salinidade data.sal
         if($scope.data.sal<1.02){
		    	 text = text +'<ion-item>Sal está baixo  |<strong> ideal:1,02</strong></ion-item> ';           
		    }else{
		 	   if($scope.data.sal>1.023){

                text = text +'<ion-item>Sal está alto  |<strong> ideal:1,023</strong></ion-item> ';

		 	 }else{  
                if($scope.data.sal<1.023 && $scope.data.sal>1.02)
                text = text +'<ion-item>Sal está ótimo  </ion-item> ';
		 	 }
		 }
         //Temperatura data.Temperatura
         if($scope.data.temperatura<26){
		    	 text = text +'<ion-item>Temperatura está baixa |<strong> ideal:26</strong></ion-item> ';           
		    }else{
		 	   if($scope.data.temperatura>26){

                text = text +'<ion-item>Temperatura está alta |<strong> ideal:26</strong></ion-item> ';

		 	 }else{  
                if($scope.data.temperatura==26)
                text = text +'<ion-item>Temperatura está ótima </ion-item> ';
		 	 }
		 }
		 //Alcalinidade
		 if($scope.data.alcalinidade<2.5){
		    	 text = text +'<ion-item>Alcalinidade está baixa |<strong> ideal:2.5</strong></ion-item> ';           
		    }else{
		 	   if($scope.data.alcalinidade>3.5){

                text = text +'<ion-item>Alcalinidade está alta |<strong> ideal:3.5</strong></ion-item> ';

		 	 }else{  
                if($scope.data.alcalinidade>2.5 &&$scope.data.alcalinidade<3.5)
                text = text +'<ion-item>Alcalinidade está ótima </ion-item> ';
		 	 }
		 }
	      var alertPopup = $ionicPopup.alert({
                title: 'Dados:',
                template: text
            });

	};
}])
   
.controller('fishCtrl', ['$scope', 'LoginService', '$ionicPopup', '$state',
function ($scope, LoginService, $ionicPopup, $state){
$scope.data = {};
$scope.items = {};
//Aqui paramos


}])
   
.controller('buildCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('testCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', 'LoginService', '$ionicPopup', '$state',
function ($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('menu.controller');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login falhou!',
                template: 'Por favor reveja as credenciais!'
            });
        });
    };
}])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('aquRioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('infoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 