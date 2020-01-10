/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope, $location, $http){
	var newValue;
	$scope.statusmenu = 'home';	

	$scope.changeStatus = function(newValue){
		$scope.statusmenu =  newValue;
	};

	$scope.createAppoiment = function(value){
		firestore.collection('newcontact').add({
		  address: value.address,
		  descripition: value.description,
		  email: value.email,
		  name: value.name,
		  phone: value.phone,
		  start: value.date,
		  type: value.type
		});
		

		// var div = document.getElementById("sucess_msg");
		// div.classList.add("sucess_msg");

		// window.setTimeout(function() {div.classList.remove("sucess_msg");}, 3000);
	};	
	
});  
