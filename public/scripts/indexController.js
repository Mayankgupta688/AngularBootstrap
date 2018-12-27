
var indexController = function($scope, $http) {


  $http.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
    $scope.employeeDetails = response.data;
  })
  
  $scope.userSalutation = "Hello Mayank. Welcome to Main Page.";
  $scope.description = "This is a Sample Angular Application containing Basic Building Blocks";

}