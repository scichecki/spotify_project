import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthLogin } from './auth-login/auth-login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AuthLogin],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test');
}
