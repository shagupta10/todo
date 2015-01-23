/**
 * Created by shaguptaf on 23-1-2015.
 */
angular.module("todo").
    controller("MainCtrl",['$scope','TodoService',function($scope,TodoService){

    $scope.todos=TodoService.todos;
        $scope.criteria='All';
    $scope.keypress=function(){
        if(event.keyCode===13){
            $scope.add();
        }
    }
    $scope.add=function(){

        TodoService.add($scope.newTodo);
        $scope.newTodo={};
    }
    $scope.delete=function(delTodo){
        TodoService.delete(delTodo);

    }
    $scope.clearCompleted=function(){
        TodoService.clearCompleted();

    }

}]);