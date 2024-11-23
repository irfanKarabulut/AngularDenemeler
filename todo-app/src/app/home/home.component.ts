import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  todoItem: string = "";
  todoItems: string[] = [];
  updateMode: boolean = false;
  updateIndex: number = -1;
 
  constructor() {
    let todos = localStorage.getItem("todos");
    if(todos)
      this.todoItems = JSON.parse(todos);
  }

  save() {
    if (!this.updateMode) {
      this.todoItems.push(this.todoItem);
    } else {
      this.todoItems[this.updateIndex] = this.todoItem;
      this.updateIndex = -1;
      this.updateMode = false;
    }
    this.todoItem = "";
    this.setLocalStorage();
  }

  delete(index: number) {
    this.todoItems.splice(index, 1);
    this.setLocalStorage();
  }

  select(index: number) {
    this.todoItem = this.todoItems[index];
    this.updateMode = true;
    this.updateIndex = index;
  }

  setLocalStorage(){
    localStorage.setItem("todos", JSON.stringify(this.todoItems))
  }

}
