import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/usersServices/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  name = 'Jorge Caloir';
  description = 'Frontend Developer';
  image = '/assets/images/photo1.jpg';
  linkedin = 'https://www.linkedin.com/in/jorge-gregorio-c-a06b20182/';

  constructor(
    private router: Router,
    private UsersServices: UsersService
  ){}

  ngOnInit(){
    this.getUsers()
  }

  getUsers(){
    this.UsersServices.list().subscribe((data:any) => {
      console.log(data)
    })
  }

  signin() {
    this.router.navigate(['./signin']);
  }

}

