var mainApp = angular.module("starter.service", []);

mainApp.service('custumServ', function($http){
          this.getUserDetails = function() {
    	var url = "http://jsonplaceholder.typicode.com/posts";
        var request = $http({
            url: url,
            method: "GET"
        });

        return request.then(function (response) { 
        	return response;
        	 });

}
this.postUserDetails = function(obj){
	var url = "http://jsonplaceholder.typicode.com/posts";
    var data =obj;
        var request = $http({
            url: url,
            method: "POST",
            data:data
        });

    return request.then(function (response) { 
            return response;
             });
}
});

 