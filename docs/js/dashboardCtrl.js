/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('dashboardCtrl', function($scope, $location, $http, $state, $stateParams){	
	checkPath();	
	function checkPath(){
		if($stateParams.obj != null){}			
		else $state.go('admin');	
	};	    

	firestore.collection('newcontact').get().then((snapshot) => {
		snapshot.docs.forEach(doc => {
			renderData(doc)
		});
	});

	function renderData(doc){
		$scope.lists = [];
		$scope.lists = doc.data;
	};
	  
});