/**
 * Created by shaguptaf on 23-1-2015.
 */
angular.module("todo").
    service ("TodoService", [function() {
    var serviceObj={};

    serviceObj.todos=[];
    serviceObj.add=function(newTodo){
        this.todos.push(newTodo);


    };
    serviceObj.delete=function(delTodo){
        var index = this.todos.indexOf(delTodo)
        this.todos.splice(index, 1);

    };
    serviceObj.clearCompleted=function(){
        for(var index=this.todos.length-1; index>=0; index--){
            if(this.todos[index].completed===true)
                this.todos.splice(this.todos.indexOf(this.todos[index]),1);
                //this.todos.splice(index, 1);

        }
    }
    return serviceObj;


}]);