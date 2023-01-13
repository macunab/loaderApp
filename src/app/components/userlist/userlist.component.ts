import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.showUsers().subscribe( resp => {
      console.log(resp);
    })
  }


}
