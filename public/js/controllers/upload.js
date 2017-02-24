//TODO this function sends the post request to where? What is $http referring
//to? How will videoupload.js get a hold of this file?
 
function uploadController($scope , $http){
    $scope.file;

    $scope.uploadFile = function(){
        console.log("I am in here!");
        console.log($scope.file.name);
        var file = $scope.file;
        var fd = new FormData();
        fd.append('file',file);
        //make a post request to the videoupload API function
        /*var request = {
            method: "POST",
            url : '/video',
            data: {
                filename : $scope.file.name ,
                dummyVar : 'a'
            }*/
            //headers : {'Content-Type' : undefined},
            //transformRequest : angular.identity
        //}; //variable to create the POST request to API

        //make the request
        //TODO experiment around a little more to check if  
        //this can be rewritten a bit more 
        $http.post('/video' , fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type' : undefined}
        })
        .success(function(data){
                console.log(data);
        });
    }
}
