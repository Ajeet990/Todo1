import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo'; 

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // localItem:string;
  todos:Todo[];
  localItem: string | null;
  constructor() { 
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
    
  }

  ngOnInit(): void {}

  
  deleteTodo(todo:Todo){
    console.log(todo);
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  toggleTodo(todo:Todo){
    var index = this.todos.indexOf(todo);
    console.log(todo.sno)
    this.todos[index].active = !this.todos[index].active ;
    console.log(todo)

    localStorage.setItem("todos",JSON.stringify(this.todos));


  }

}