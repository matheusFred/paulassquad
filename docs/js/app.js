/* ****************************************************** */
/*
/* Angular app comunication aplication.
/* 
/* Var @var myVariableApp "Recebe angularModule"	
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
var moduleApp = angular.module('moduleApp', ['ngAnimate', 'ui.router']);

moduleApp.run(["$state",function($state){$state.go('index');}]);

const configDB = {
    apiKey: "AIzaSyADRVdQRNRWki9gnY1PfJocjij0gazHzWs",
    authDomain: "paulasquad-d044d.firebaseapp.com",
    databaseURL: "https://paulasquad-d044d.firebaseio.com",
    projectId: "paulasquad-d044d",
    storageBucket: "paulasquad-d044d.appspot.com",
    appId: "1:238768520466:web:832683053d7a4080"
};
firebase.initializeApp(configDB);

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);