import { Post } from "./post";

export class Comment {
    commentid: number;
    text: string;
    comment_date: Date;
    post: Post; // Référence à la publication associée
  
    constructor(
      commentid: number,
      text: string,
      comment_date: Date,
      post: Post,
    ) {
      this.commentid = commentid;
      this.text = text;
      this.comment_date = comment_date;
      this.post = post;
    }
  }
  