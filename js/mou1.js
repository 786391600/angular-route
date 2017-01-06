angular.module('minOrmax',[]).filter('minOrmax',function(){
    return function(arr,obj){
        var type=obj||'min';
        var aa=arr[0];
        for(var i=1;i<arr.length;i++){
            if(type=='min'){
                if(arr[i]<aa){
                    aa=arr[i];
                }
            }else if(type=='max'){
                if(arr[i]>aa){
                    aa=arr[i];
                }
            }
        }
        return aa;
    }
})