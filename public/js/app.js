const app = angular.module('MyApp', []);

app.controllers('MainController', ['$http', function($http){
  this.createdBlog = function(){
    $http({
      method: 'POST',
      url: '/horror',
      data: {
        title: this.title,
        body: this.body
      }
    }).then(function(response){
      console.log(response);
    }, function(error){
      console.log(error);
    });
  };


});
