import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { PostService } from 'src/app/Services/post.service';
import { Post } from 'src/app/Model/post';
@Component({
  selector: 'app-creatpost',
  templateUrl: './creatpost.component.html',
  styleUrls: ['./creatpost.component.css']
})
export class CreatpostComponent implements OnInit {
  postForm!: FormGroup;
  posts:Post[]=[];
  constructor(private postService:PostService,private formBuilder: FormBuilder){
    this.postForm = this.formBuilder.group({
      content: ['',Validators.required],
      img:  ['',Validators.required],
    });
  }
  ngOnInit(): void {
  }
  addPost(): void{
    if(this.postForm.valid){
      const newPost : Post= this.postForm.value as Post;
      this.postService.addPost(newPost).subscribe(() =>{this.loadPost();
        this.postForm.reset();
      });
    }
    else{
      alert("error ! ");
    }

}
loadPost(){
  this.postService.getAllPosts().subscribe(posts => {
    this.posts=posts;
  } )}
}
