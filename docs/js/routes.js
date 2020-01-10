/* ****************************************************** */
/*
/* Routes aplication config.
/* 
/* Utilizado diretiva uiRouter do AngularJs.     
/*   
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.config(function($stateProvider) {
  $stateProvider
    .state('home', {
      url: "",
      templateUrl: '../pags/aboutus.html'
    }) 
    .state('setup', {
      url: "/setup",
      templateUrl: '../pags/setup.html'
    })     
    .state('franchise', {
      url: "/franchise",
      templateUrl: '../pags/franquia.html'
    })     
    .state('funcionario', {
      url: "/funcionario",
      templateUrl: '../pags/funcionario.html'
    }) 
    .state('faq', {
      url: "/faq",
      templateUrl: '../pags/faq.html'
    })     
    
     
    .state('admin', {
      url: "/admin",
      templateUrl: '../pags/admin.html',
      controller: 'adminCtrl'
    })  
    .state('dashboard', {
      url: "admin/cms",
      templateUrl: '/dashboard.html',
      controller: 'dashboardCtrl',
      params: {
        obj: null
      }
    })    

});