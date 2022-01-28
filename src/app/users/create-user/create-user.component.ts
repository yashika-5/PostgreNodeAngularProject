import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  
  }

  addUser(f: NgForm){
    console.log(f.value)
    let user = f.value;
    this.userService.addUser(f.value).subscribe( (message) =>{
      console.log(message);
    });;
  }
}
