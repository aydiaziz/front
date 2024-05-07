import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../Model/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = "http://localhost:8083/post/"

  constructor(private http:HttpClient) { }
  addPost(post: FormData): Observable<Post> {
    return this.http.post<Post>(this.baseUrl + "add", post);
  }
  updatePost(post: Post): Observable<Post>{
    return this.http.post<Post>(this.baseUrl + "update", post);
  }
  deletePost(id: number): Observable<Post>{
    return this.http.delete<Post>(this.baseUrl + "delete/" + id);}
    getPost(id: number): Observable<Post>{
      return this.http.get<Post>(this.baseUrl + "get/" + id);}
      getAllPosts(): Observable<Post[]>{
        return this.http.get<Post[]>(this.baseUrl + "all");
      }
    
}
