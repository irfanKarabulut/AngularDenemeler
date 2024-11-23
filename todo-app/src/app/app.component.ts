import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';

  todoItem: string = "";
  todoItems: string[] = [];
  updateMode: boolean = false;
  updateIndex: number = -1;

  save() {
    if (!this.updateMode) {
      this.todoItems.push(this.todoItem);
    } else {
      this.todoItems[this.updateIndex] = this.todoItem;
      this.updateIndex = -1;
      this.updateMode = false;
    }
    this.todoItem = "";
  }

  delete(index: number) {
    this.todoItems.splice(index, 1);
  }

  select(index: number) {
    this.todoItem = this.todoItems[index];
    this.updateMode = true;
    this.updateIndex = index;
  }
}
