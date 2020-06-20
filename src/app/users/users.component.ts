import { Component, OnInit } from '@angular/core';
import{ GithubService }from '../services/github.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:string[];

  constructor(private githubService:GithubService){
   }

  getUser(){
    this.githubService.getData().subscribe((res)=>{
      console.log("success", res);
      this.user=res;
    })
  }

  ngOnInit(): void {
  }

}
