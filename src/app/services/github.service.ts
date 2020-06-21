import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GithubService {
  private username:string;

  constructor(private http:HttpClient) {
    this.username = 'daneden'
  }

  getData(){
    return this.http.get("https://api.github.com/users/"+ this.username +"?access_token="+environment.api_key)
  }
  
}
