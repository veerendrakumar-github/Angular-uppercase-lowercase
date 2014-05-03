function MyCtrl($scope,$filter){
    $scope.inputStr="Demo";
    $scope.test;
    $scope.ToUpper=function(changeCase){
    $scope.test=$filter(changeCase)($scope.inputStr);
    };
}
