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
  profile;

  constructor(private dataService:GithubService){
    this.dataService.getData().subscribe(res => {
      console.log(res);
      this.profile=res;
    });
  }

  ngOnInit(): void {
  }

}
