angular.module("myapp",["minOrmax"]).controller('ctrl',['$scope',"$http","$filter",function($scope,$http,$filter){
    $http({
        url:'/ajax',
        method:'get'
    }).then(function(e){
        var aa=e.data;
        var arr=[];
        for(var i=0;i<aa.length;i++){
            var current=[];
           if(aa[i].felg!=true){
               current.push(aa[i]);
           }
           for(var j=i+1;j<aa.length;j++){
               if(aa[i].en==aa[j].en&&aa[j].felg!=true){
                   current.push(aa[j]);
                   aa[j].felg=true;
               }
           }
            if(current.length>0){
                current.en=aa[i].en;
                arr.push(current);
            }

        }
        
       $scope.type='';
       $scope.data=$filter("orderBy")(arr,'en');
       $scope.show=function(obj){
           $scope.type=obj;
       }
       $scope.all=function(){
           $scope.type='';
       }
    })
    
}])


angular.module('my',[]).directive('abc',function(){
    return{
        restrict:'ECMA',
        templateUrl:'/mem',
        transclude:true,
        link:function($scope,b,c){
            $scope.data=[
                {
                    name:"111",
                    son:[
                        {name:"1-1"},
                        {name:"1-2"},
                        {name:"1-3"},
                        {name:"1-4"},
                    ]
                },
                {
                    name:"222",
                    son:[
                        {name:"2-1"},
                        {name:"2-2"},
                        {name:"2-3"},
                        {name:"2-4"},
                    ]
                },
                {
                    name:"333",
                    son:[
                        {name:"3-1"},
                        {name:"3-2"},
                        {name:"3-3"},
                        {name:"3-4"},
                    ]
                },
                {
                    name:"444",
                    son:[
                        {name:"4-1"},
                        {name:"4-2"},
                        {name:"4-3"},
                        {name:"4-4"},
                    ]
                },
            ];
            $scope.a=0;
            $scope.change=function(id){
                $scope.a=id;
            }
        },scope:{


        }

    }
}).controller('ctrl',function($scope){
   $scope.abc='我是控制器';
})

angular.module('route',['ngRoute']).config(function($routeProvider){
    $routeProvider.when("/route",{
        templateUrl:'/route',
        controller:'route'
    })
})