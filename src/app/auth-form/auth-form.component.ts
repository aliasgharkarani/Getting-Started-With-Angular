import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { User } from './auth-form.interface';
@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
