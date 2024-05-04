import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Model/post';
import { commentaire } from 'src/app/Model/commentaire';
import { CommentService } from 'src/app/Services/comment.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-creatcomment',
  templateUrl: './creatcomment.component.html',
  styleUrls: ['./creatcomment.component.css']
})
export class CreatcommentComponent  implements OnInit{
  @Input() post!: Post;
  newComment: commentaire= new commentaire(0, '', new Date(), new Post(0, 0, '', new Date(), '', []));

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.post = JSON.parse(params['post']) as Post; 
      this.newComment.post = this.post;
    });
  }

  createComment(commentText: string): void {
    if (commentText.trim()) {
      const newComment: commentaire = {
        commentid: 0,
        text: commentText,
        comment_date: new Date(),
        post: this.post
      };
  
      this.commentService.addComment(newComment).subscribe(
        (response) => {
          console.log('Commentaire ajouté avec succès:', response);
          this.post.comments = [...(this.post.comments || []), response];
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du commentaire:', error);
        }
      );
    } else {
      alert('Le commentaire ne peut pas être vide.');
    }
  }
  
}
