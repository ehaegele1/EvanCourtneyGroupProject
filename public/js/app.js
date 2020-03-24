const app = angular.module('MyApp', []);

app.controller('MainController', ['$http', function($http){
  this.bodys = [];
  this.editsToShow = null;

//CREATE BLOG
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

//SHOW ALL BLOGS
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

//EDIT
  this.updatedBlog = function(blog){
    $http({
      method: 'PUT',
      url: '/horror/' + blog._id,
      data: {
        body: this.updatedBody
      }
    }).then(response => {
      this.getBlogs();
      this.editsToShow = null;
      console.log(response.data.body);
    },  error => {
      console.log(error);
    });
  };
}]);

//DELETE
this.deleteBlog = function(blog){
  $http({
    method: 'DELETE',
    url: '/horror/' + blog._id,
  }).then(
    function(){
      controller.getBlogs()
    }
    function(error){
      
    }
  )
}
