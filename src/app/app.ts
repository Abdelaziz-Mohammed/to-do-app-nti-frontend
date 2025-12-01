import { Component, OnInit, signal } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule, FormsModule, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('MEAN To-Do App');
  todos = signal<Array<{ _id?: string; title: string; createdAt?: string }>>([]);
  newTodoTitle = signal('');

  private readonly apiUrl = 'http://localhost:5000/api/todos';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.http.get<Array<{ _id: string; title: string; createdAt: string }>>(this.apiUrl).subscribe({
      next: (todos) => this.todos.set(todos),
      error: (err) => console.error('Failed to load todos', err),
    });
  }

  addTodo(): void {
    const title = this.newTodoTitle().trim();
    if (!title) {
      return;
    }

    this.http
      .post<{ _id: string; title: string; createdAt: string }>(this.apiUrl, { title })
      .subscribe({
        next: (created) => {
          this.todos.update((current) => [created, ...current]);
          this.newTodoTitle.set('');
        },
        error: (err) => console.error('Failed to add todo', err),
      });
  }
}
