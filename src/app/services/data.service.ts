import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    console.log('Servise is working')
  }

  private headers = new HttpHeaders({'Content-Type':'application/json'});

  getData(){
    return this.http.get('http://localhost:8000/jugada?format=json', {headers: this.headers})
  }

  sendData(d){
    return this.http.post('http://localhost:8000/tablero', d, {headers: this.headers})
  }
}
