import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  name = 'Jorge'

  constructor(private router: Router){}

  users() {
    this.router.navigate(['/users']);
  }
}
