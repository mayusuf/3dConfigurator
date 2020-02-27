
function ConfigController($scope, $http) {
        
    $scope.selectedArtist = "";
   
    $http.get('config.json').success(function(data) {
        
        //alert(JSON.stringify(data["parts"]));
        
        $scope.parts = data["parts"];
        $scope.params = data["parts"][0]["parameters"];     
        
        
        //alert(JSON.stringify(data["configurationInputs"][0]["values"]));
        
        $scope.colorName = data["configurationInputs"][0]["name"];
        $scope.colorType = data["configurationInputs"][0]["type"];
        $scope.colors = data["configurationInputs"][0]["values"];
    });

}