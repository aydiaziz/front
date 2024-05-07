import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PostService } from 'src/app/Services/post.service';
import { Post } from 'src/app/Model/post';
import { FileuploadService } from 'src/app/Services/fileupload.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FileHandle } from 'src/app/Model/file-handle';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-creatpost',
  templateUrl: './creatpost.component.html',
  styleUrls: ['./creatpost.component.css']
})
export class CreatpostComponent implements OnInit {
  postForm!: FormGroup;
  post: Post = {
    pubid: 0,
    likes: 0,
    content: '',
    publication_date: new Date(),
    img: '',
    comments: [],
    productimage: []
  };
  selectedFile: File | null = null;
  uploadError: string | null = null;

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder,
    private fileUploadService: FileuploadService,
    private sanitizer: DomSanitizer
  ) {
    this.postForm = this.formBuilder.group({
      content: ['', Validators.required],
      img: ['']
    });
  }

  ngOnInit(): void {
  }

  addPost(postForm: FormGroup) {
    const postFormData = this.prepareFromData(this.post);

    this.postService.addPost(postFormData).subscribe(
      (response: Post) => {
        console.log('Post created successfully:', response); // Log the entire Post object
        // Or log specific properties:
        console.log('Content:', response.content);
        console.log('Publication date:', response.publication_date);
        postForm.reset(); // Reset form after success
      },
      (error: HttpErrorResponse) => {
        console.error('Error creating post:', error.message);
        this.uploadError = error.message; // Set user-friendly error message
      }
    );
  }

  onFileSelected(event: any): void {
    // Clear previous upload error
    this.uploadError = null;

    if (event.target.files) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file,
        url: this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(file))
      };
      this.post.productimage.push(fileHandle);
    }
    
  }

  prepareFromData(post: Post): FormData {
    const formData = new FormData();
    formData.append('content', post.content);
    formData.append(
      'post',
      new Blob([JSON.stringify(post)], { type: 'application/json' })
    );
    for (let i = 0; i < post.productimage.length; i++) {
      formData.append('imageFile', post.productimage[i].file, post.productimage[i].file.name);
    }
    return formData;
  }
}
