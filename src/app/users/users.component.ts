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
  username:string;
  profile;
  work;

  constructor(private dataService:GithubService){
  }

  findProfile(){
    this.dataService.getName(this.username);
    
    this.dataService.getData().subscribe(res => {
      console.log(res);
      this.profile=res;
    });

    this.dataService.getRepos().subscribe(repo => {
      console.log(repo);
      this.work=repo;
    })
  }

  ngOnInit(): void {
  }

}
