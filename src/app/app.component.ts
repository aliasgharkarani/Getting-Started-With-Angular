import { Component } from '@angular/core';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoApp';
  rememberMe = false;

  createUser(user: User) {
    console.log('Create user', user, this.rememberMe);
  }
  loginUser(user: User) {
    console.log('Login user', user, this.rememberMe);
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }
}
