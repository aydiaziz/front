import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { commentaire } from '../Model/commentaire';



@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = "http://localhost:8083/comment/"

  constructor(private http:HttpClient) { }
  addComment(Comment: commentaire): Observable<commentaire> {
    return this.http.post<commentaire>(this.baseUrl + "add", Comment);
  }
  updateComment(Comment: commentaire): Observable<commentaire>{
    return this.http.post<commentaire>(this.baseUrl + "update", Comment);
  }
  deleteComment(id: number): Observable<commentaire>{
    return this.http.delete<commentaire>(this.baseUrl + "delete/" + id);}
    getComment(id: number): Observable<commentaire>{
      return this.http.get<commentaire>(this.baseUrl + "get/" + id);}
      getAllComments(): Observable<commentaire[]>{
        return this.http.get<commentaire[]>(this.baseUrl + "all");
      }
}
