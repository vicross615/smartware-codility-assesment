import {Component, Output, OnInit, EventEmitter, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `<form #form="ngForm"  novalidate>
  <div>

   <input type="text" id="username-input" name="username-input" placeholder="Password" 
   [(ngModel)]="username" required>
   <input type="password" id="password-input" name="password-input" placeholder="Password" 
   [(ngModel)]="password" required>

   <button id="login-button" [disabled]="! form.valid" (click)="submit(username, password)" [disabled]="!form.valid">Submit</button>
  </div>
  </form>`
})
export class LoginComponent {

  @Output()
  login: EventEmitter<any> = new EventEmitter();

  username: string = '';
  password: string ='';

  submit(username: string, password: string) {

    this.login.emit({username, password});
  }
}
