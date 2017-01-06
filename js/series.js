angular.module("series",[]).factory("A",function($http){
    return $http({
        url:'aa.txt'
    })
})