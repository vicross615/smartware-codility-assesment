import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'home.component.html', selector: 'app-home'})
export class HomeComponent {

    constructor(
    ) {
    }

    ngOnInit() {
    }

  username: string = '';
  password: string= '';

  yourDetails(event) {
    this.username = event.username;
    this.password = event.password;
  }
}
