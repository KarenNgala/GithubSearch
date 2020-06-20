import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) {
    
  }
  getData():Observable<any>{
    const link = environment.api_key;
    return this.http.get<any>(link)

  }

}
