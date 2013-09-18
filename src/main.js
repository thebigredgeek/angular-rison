angular.module('rison',[])
	.factory('$rison',[
		function(){
			return {
				hello:function(){
					return "world";
				}
			};
}]);