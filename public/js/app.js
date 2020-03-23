const app = angular.module('MyApp', []);

app.controller('MainController', ['$http', function($http){
  this.createdBlog = function(){
    $http({
      method: 'POST',
      url: '/horror',
      data: {
        body: this.body
      }
    }).then(function(response){
      console.log(response);
    }, function(error){
      console.log(error);
    });
  };


}]);
