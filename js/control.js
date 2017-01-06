angular.module('control',[]).controller('aa',["$scope","A","$routeParams",function($scope,A,$routeParams){
     A.then(function(e){
       $scope.con=e.data;
     })

}]).controller('cc',["$scope","$routeParams","A",function($scope,$routeParams,A){
     A.then(function(e){
          for(var i=0;i<e.data.length;i++){
               if($routeParams.id==e.data[i].id){
                    $scope.con=e.data[i].con
               }
          }
     })
}]).controller('bb',["$scope","$routeParams","A",function($scope,$routeParams,A){
     A.then(function(e){
          $scope.con=e.data;
     })
}])