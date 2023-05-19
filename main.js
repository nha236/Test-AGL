angular.module('myApp', [])
  .controller('FormController', function($scope) {
    // Initialize variables
    $scope.showErrorIcons = false;
    $scope.showSuccessIcons = false;

    // Form submission handlers
    $scope.registerFormSubmit = function() {
      // Perform validation
      if (!$scope.username || !$scope.password || !$scope.repeatPassword || !$scope.email) {
        // At least one field is empty
        $scope.showErrorIcons = true;
        $scope.showSuccessIcons = false;
      } else {
        // All fields are filled
        $scope.showErrorIcons = false;
        $scope.showSuccessIcons = true;

        // Perform form submission logic
        // ...
      }
    };

    $scope.cancelForm = function() {
      // Clear form fields and icons
      $scope.username = '';
      $scope.password = '';
      $scope.repeatPassword = '';
      $scope.email = '';
      $scope.showErrorIcons = false;
      $scope.showSuccessIcons = false;
    };

    // Other controller logic...

  });
