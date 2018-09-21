import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private url = "server/api/v1/bikes";
  
  constructor(private http: HttpClient) { }

  getBikes(){
    return this.http.get(this.url);
  }
}
