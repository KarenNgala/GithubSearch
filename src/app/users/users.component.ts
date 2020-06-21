import { Component, OnInit, } from '@angular/core';
import { Users } from '../Classes/users';
import { GithubService } from '../services/github.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[GithubService]
})
export class UsersComponent implements OnInit {

  user:Users;

  constructor(private dataService:GithubService){
  }

  getUser(searchTerm){
    this.dataService.getData(searchTerm).then(
      (success)=>{
        this.user=this.dataService.profile;
        console.log(this.user)
      }, 
      (error)=>{
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
    this.getUser('karenngala');
  }

}
