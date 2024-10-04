import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DreamService {

  endpoint = 'http://localhost:8080/api/dreams'

  constructor(private httpClient: HttpClient) { }

  getDreams() {
    return this.httpClient.get(this.endpoint);
  }


  createDream(dreamData: any) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("title", dreamData.title);
    body.append("description", dreamData.description);
    body.append("feel", dreamData.feel);
    body.append("img", dreamData.img);

    return this.httpClient.post(this.endpoint, body.toString(), { headers});
  }

  delete(id:any){
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  
  
}
