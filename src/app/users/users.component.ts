import { Component, OnInit } from '@angular/core';
import{ GithubService }from '../services/github.service'
import { Users } from '../Classes/users'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  profile:Users;

  constructor(private githubService:GithubService){
   }

  getUser(){
    this.githubService.getData()
    // .subscribe((res)=>{
    //   console.log("success", res);
    //   this.user=res;
    // });
  }

  ngOnInit(): void {
    this.githubService.getData()
    this.profile=this.githubService.profile
  }

}
