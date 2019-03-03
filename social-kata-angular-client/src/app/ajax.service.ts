import { Injectable } from '@angular/core';
import { HttpParams, HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Command } from './command';
import { catchError, map, tap } from 'rxjs/operators';
import {Response} from './response';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) { }

  private urlBase = 'http://localhost:8080/'
  private message = 'message'
  private user = 'user'
  private relation = 'relation'

  callRead( sender, target ): Observable<Response> {

    let url = this.urlBase + this.message
    let params = new HttpParams().set("sender",sender)
      .set("target", target);
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
    
    let result:Observable<Response> = this.http.get<Response>(url,
         { headers: headers, params: params })

    return result;
  }

  callWall( sender, target): Observable<Response> {

    let url = this.urlBase + this.user
    let params = new HttpParams().set("sender",sender).set("target",target);
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
    
    let result:Observable<Response> = this.http.get<Response>(url,
         { headers: headers, params: params })

    return result;
  }

  callPost( command:Command ): Observable<Response> {

    let url = this.urlBase + this.message
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
    
    let result:Observable<Response> = this.http.post<Response>(url, command, 
      {headers : headers})

    return result;
  }

  callFollow( command:Command ): Observable<Response> {

    let url = this.urlBase + this.relation
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
    console.log(url);
    let result:Observable<Response> = this.http.post<Response>(url, command, 
      {headers : headers})

    return result;
  }


 


}
