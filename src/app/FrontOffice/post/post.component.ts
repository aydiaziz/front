import { Component, Inject, OnInit } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { PostService } from 'src/app/Services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatcommentComponent } from '../creatcomment/creatcomment.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ImageProcessingService } from 'src/app/Services/image-processing.service';
import { map } from 'rxjs';
import { FileHandle } from 'src/app/Model/file-handle';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import{MatDialog} from '@angular/material/dialog'
import { ShowimagesComponent } from '../showimages/showimages.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post | undefined;
  posts: Post[] = [];
  postForm!: FormGroup;
  imageUrl: string | null = null;

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router,
    private imageProcessingService:ImageProcessingService,
    @Inject(MAT_DIALOG_DATA) public data: FileHandle[],
    public imagesDialog: MatDialog
  ) {
    
  }

  ngOnInit(): void {
    this.posts = [];
    this.loadPost();
    
    
  }

  loadPost() {
    this.postService.getAllPosts()
    .pipe(
      map((x: Post[], i) =>x.map((post:Post)=>this.imageProcessingService.createImages(post))))
    .subscribe(
      (resp: Post[])=> {
        console.log(resp);
        this.posts = resp
        for (let i=0;i<resp.length;i++){
          this.showImages(resp[i]);
        }
        
      }, (error:HttpErrorResponse)=> {
        console.log(error);
      }
    );
  }
  
  showImages(post: Post){
    console.log(post);
    this.imagesDialog.open(ShowimagesComponent,{
      data: {
        images: post.productimage
      },

      height:'500px',
      width:'800px'
    });
  }
  
  

  goToCommentForm(postId: number): void {
    this.router.navigate(['/creat-comment', postId]);
  }
}