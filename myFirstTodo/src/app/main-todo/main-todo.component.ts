import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-todo',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.css']
})
export class MainTodoComponent implements OnInit {
  todo: string;
  title = 'myFirstTodo';
  todos = [
  {
    label: 'Milk"',
    done: true,
    quantity: 1
  },
];

// Impleating Added new todo in the list
addTodo(e) {
  e.preventDefault();


  // const newTodo = {
  //   label: newTodolabel,
  //   quantity : 1,
  //   done: true
  // };
  // this.todos.push(newTodo);
}

// Implementing delete todo from the list

deleteTodo(todo) {
  this.todos = this.todos.filter(remove => remove.label !== todo.label);
}

// if(todos.length == 0) {

// }
  constructor() { }

  ngOnInit() {
  }

}
