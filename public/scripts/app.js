console.log('js');
var app = angular.module('routeApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/kenobi', {
    templateUrl: 'views/routes/generalKenobi.html',
    controller: 'KenobiContoller as kc'
  }).when('/witcher', {
    templateUrl: 'views/routes/geraltRivia.html',
    controller: 'GerlaltController as gc'
  }).when('/cullen', {
    templateUrl: 'views/routes/cullenBohannan.html',
    controller: 'CullenContoller as cc'
  })
});//end config

app.controller('KenobiContoller', KenobiContoller);
app.controller('CullenContoller', CullenContoller);
app.controller('GerlaltController', GerlaltController);


function KenobiContoller(){
  console.log('KenobiContoller loaded');
};

function CullenContoller(){
  console.log('CullenContoller loaded');
};

function GerlaltController(){
  console.log('GerlaltController loaded');
}
