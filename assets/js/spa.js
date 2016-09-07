var mainModule = angular.module('MyApp',[]);

mainModule.controller('AppCtrl', ['$scope', function($scope)
{
	io.socket.get('/emoji', function(data)
	{
		$scope.emojiList = data;
		$scope.$apply();
	});

	io.socket.on('emoji', function(event)
	{
		switch(event.verb)
		{
			case 'created':
			$scope.emojiList.push(event.data);
			$scope.$apply();
			break;
		}
	});
	// $scope.emojiList = [{name:"foo"}];
}]);
