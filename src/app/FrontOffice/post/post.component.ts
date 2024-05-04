import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { PostService } from 'src/app/Services/post.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatcommentComponent } from '../creatcomment/creatcomment.component';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:Post[]=[];
  postForm!: FormGroup;
  constructor(private postService:PostService,private formBuilder: FormBuilder,private router: Router){
    this.postForm = this.formBuilder.group({
      content: ['',Validators.required],
      img:  ['',Validators.required],
    });
  }
  
  loadPost(){
    this.postService.getAllPosts().subscribe(posts => {
      this.posts=posts;
    } )
   
    
  }
  ngOnInit():void{this.loadPost();}
 addPost(): void{
  if(this.postForm.valid){
    const newPost : Post= this.postForm.value as Post;
    this.postService.addPost(newPost).subscribe(() =>{this.loadPost();
      this.postForm.reset();
    });
  }
  else{
    alert("post published ! ");
  }
 }
 goToCommentForm(postId: number): void {
  this.router.navigate(['/creat-comment', postId]); // Rediriger vers le composant CommentFormComponent avec l'ID du post
}


}
