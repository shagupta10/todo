/**
 * Created by shaguptaf on 22-1-2015.
 */
angular.module("todoApp",[])
    .controller("MainCtrl",function($scope){
      $scope.todos=[];
    $scope.add=function(){
        $scope.todos.push($scope.newTodo);
        $scope.newTodo={};
    }
        $scope.delete=function(delTodo){

            var index = $scope.todos.indexOf(delTodo)
            $scope.todos.splice(index, 1);

        }
        $scope.clearCompleted=function(){
           for(var index=$scope.todos.length-1; index>=0; index--){
               if($scope.todos[index].completed===true)
                   $scope.todos.splice(index, 1);
           }

        }

    });
