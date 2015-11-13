var mainApp = angular.module("starter.service", []);

mainApp.service('custumServ', function($http){
          this.getUserDetails = function() {
    	var url = "http://jsonplaceholder.typicode.com/posts/1";
        var request = $http({
            url: url,
            method: "GET"
        });

        return request.then(function (response) { 
        	return response;
        	 });

}
this.postUserDetails = function(){
	var url = "http://jsonplaceholder.typicode.com/posts/1";
        var request = $http({
            url: url,
            method: "POST",
            data:data
        });
}
});

 