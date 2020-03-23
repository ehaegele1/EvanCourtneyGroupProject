const app = angular.module('MyApp', []);

app.controller('MainController', ['$http', function($http){
  this.bodys = [];

  this.createdBlog = () => {
    $http({
      method: 'POST',
      url: '/horror',
      data: {
        body: this.body
      }
    }).then(response => {
      this.bodys.push(response.data);
      console.log(response.data);
    }, error => {
      console.log(error);
    });
  };

  this.getBlogs = () => {
    $http({
      method: 'GET',
      url: '/horror'
    }).then(response => {
      this.bodys = response.data;
      console.log(response.data);
    }, error => {
      console.log(error);
    });
  };

  this.getBlogs();
}]);
