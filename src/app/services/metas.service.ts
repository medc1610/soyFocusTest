import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class MetasService {

  @Output() disparador: EventEmitter<any> = new EventEmitter() 
  private url:string = 'http://localhost:3000'

  

  constructor(private http: HttpClient) { }

    meta(){
      return this.http.get<any>(`${this.url}/metas`)
    }

}

