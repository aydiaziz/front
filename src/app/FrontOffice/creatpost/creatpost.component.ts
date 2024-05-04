import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { PostService } from 'src/app/Services/post.service';
import { Post } from 'src/app/Model/post';
import { FileuploadService } from 'src/app/Services/fileupload.service';
@Component({
  selector: 'app-creatpost',
  templateUrl: './creatpost.component.html',
  styleUrls: ['./creatpost.component.css']
})
export class CreatpostComponent implements OnInit {
  postForm!: FormGroup;
  posts:Post[]=[];
  selectedFile: File | null = null;
  constructor(private postService:PostService,private formBuilder: FormBuilder,private fileUploadService: FileuploadService){
    this.postForm = this.formBuilder.group({
      content: ['',Validators.required],
      img:  ['',Validators.required],
    });
  }
  
  addPost(): void {
    if (this.postForm.valid && this.selectedFile) {
      const newPost: Post = this.postForm.value as Post;
      // Envoie le fichier sélectionné au service de téléchargement de fichiers
      this.fileUploadService.uploadFile(this.selectedFile).subscribe(
        (imageUrl) => {
          newPost.img = imageUrl; // Attribuez l'URL de l'image téléchargée au champ 'img' du post
          this.postService.addPost(newPost).subscribe(
            () => {
              this.loadPosts();
              this.postForm.reset();
            },
            (error) => {
              console.error('Error adding post:', error);
              alert('An error occurred while adding the post.');
            }
          );
        },
        (error) => {
          console.error('Error uploading file:', error);
          alert('An error occurred while uploading the file.');
        }
      );
    } else {
      alert('Please fill out all required fields and select an image.');
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0]; // Récupère le fichier sélectionné
  }

  loadPosts(): void {
    this.postService.getAllPosts().subscribe(
      (posts) => {
        this.posts = posts;
      },
      (error) => {
        console.error('Error loading posts:', error);
      }
    );
  }
  ngOnInit(): void {
    this.loadPosts();
  }
}
