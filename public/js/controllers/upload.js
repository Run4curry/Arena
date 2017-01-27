//TODO this function sends the post request to where? What is $http referring
//to? How will videoupload.js get a hold of this file? 
function uploadController($scope , $http){
    $scope.file;

    $scope.uploadFile = function(){
        console.log("I am in here!");
        console.log($scope.file);
        $http({
            method: 'POST',
            url: '/video' ,
            data : {
                file : $scope.file
            }
        }).success(function(data){
            console.log(data);
        });
    }
}
