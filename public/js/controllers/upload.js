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