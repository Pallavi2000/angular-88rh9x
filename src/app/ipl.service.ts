import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class IplService {
  baseUrl = "https://ipl-2020.herokuapp.com/ipl/";
  constructor(private http:HttpClient) { }
  
  teamLabels():Observable<any>{
    let url = `${this.baseUrl}labels`;
    return this.http.get(url);
  }
  getPlayersByTeamName(teamname):Observable<any>{
    let url = `${this.baseUrl}team/${teamname}`;
    return this.http.get(url);
  }
  getTeamRoleStat(teamname):Observable<any>{
    let url = `${this.baseUrl}team/rolestat/${teamname}`;
    return this.http.get(url);
  }
}