/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope, $state){
	$scope.statusmenu = 'home';	

	$scope.changeStatus = function(newValue){
		$scope.statusmenu =  newValue;
	};

	$scope.createAppoiment = function(value){
		if(value.type == "newsocio"){
			firestore.collection('newcontact').add({
				email: value.email,
				name: value.name,
				phone: value.phone,
				type: value.type
			});
		} else {
			firestore.collection('newcontact').add({
			address: value.address,
			descripition: value.description,
			email: value.email,
			name: value.name,
			phone: value.phone,
			start: value.date,
			type: value.type
			});
		}

		$state.go('sucess');
	};	
	
});  
