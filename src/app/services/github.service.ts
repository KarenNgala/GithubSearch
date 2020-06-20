import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import{ Users } from '../Classes/users'
import { environment } from 'src/environments/environment';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  profile:Users;

  constructor(private http:HttpClient) {
    this.profile=new Users(0,"","")
  }
  getData(){
    interface ApiResponse{
      id:number;
      avatar_url:string;
      name:string;
    }
    const link = environment.api_key;
    let promise =new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>(link).toPromise().then(res=>{
        console.log("success",res)
        this.profile.id=res.id;
        this.profile.avatar_url=res.avatar_url;
        this.profile.name=res.name;
        resolve()
      },
      error=>{
        this.profile.name="User not found!"

        reject(error)
      })
    })
    return promise

  }

}
