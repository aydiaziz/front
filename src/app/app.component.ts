import { Component } from '@angular/core';
import { PostService } from './Services/post.service';
import { CommentService } from './Services/comment.service';
import { PostComponent } from './FrontOffice/post/post.component';
import { Post } from './Model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coflow';
  constructor(private postService: PostService ,private commentService: CommentService){

  }
  posts: Post[]=[];
  
}

