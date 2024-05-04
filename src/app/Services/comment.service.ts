import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = "http://localhost:8083/comment/"

  constructor(private http:HttpClient) { }
  addComment(Comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.baseUrl + "add", Comment);
  }
  updateComment(Comment: Comment): Observable<Comment>{
    return this.http.post<Comment>(this.baseUrl + "update", Comment);
  }
  deleteComment(id: number): Observable<Comment>{
    return this.http.delete<Comment>(this.baseUrl + "delete/" + id);}
    getComment(id: number): Observable<Comment>{
      return this.http.get<Comment>(this.baseUrl + "get/" + id);}
      getAllComments(): Observable<Comment[]>{
        return this.http.get<Comment[]>(this.baseUrl + "all");
      }
}
