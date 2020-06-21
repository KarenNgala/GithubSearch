import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Users } from '../Classes/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GithubService {
  profile:Users;

  constructor(private http:HttpClient) {
    this.profile=new Users(0,"","","","",0,0,0,new Date);
  }

  getData(searchTerm:string){
    interface ApiResponse{
      id:number;
      avatar_url:string;
      name:string;
      html_url:string;
      location:string;
      public_repos:number;
      followers:number;
      following:number;
      updated_at:Date;
    }

    const key = environment.api_key;
    let promise =new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+ searchTerm +"?access_token="+key).toPromise()
      .then((res)=>{
        this.profile=res;
        console.log("success",this.profile)
          this.profile.name=res.name;
        resolve()
      },
      error=>{
        console.log(error)

        reject()
      })
    })
    return promise

  }

}
