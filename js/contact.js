


//1. create app module 
        var customerApp = angular.module('ustomerApp', []);

        //2. create controller
        customerApp.controller("customerController", function ($scope, $http) {
  
            //3. attach originalStudent model object
            $scope.originalCustomer = {
                
                firstName: 'ana',
                lastName: 'brein',
                Date: new Date('01/31/2000'),
                gender: 'male',
                bookingType: 'Suites'
              
            };
            

            //4. copy originalStudent to student. student will be bind to a form 
            $scope.customer = angular.copy($scope.originalCustomer);

            //5. create submitStudentForm() function. This will be called when user submits the form
            $scope.submitCustomerForm = function () {

                // send $http request to save student

            };

            //6. create resetForm() function. This will be called on Reset button click.  
            $scope.resetForm = function () {
                $scope.customer = angular.copy($scope.originalCustomer);
            };
    });



