import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';

  todoItem: string = "";
  todoItems: string[] = [];

  save() {
    this.todoItems.push(this.todoItem);
    this.todoItem = "";
  }

  delete(index: number) {
    this.todoItems.splice(index, 1);
  }
}
