import { commentaire } from "./commentaire";
import { FileHandle } from "./file-handle";

export class Post {
    pubid: number;
    likes: number;
    content: string;
    publication_date: Date;
    img: string;
    comments: commentaire[];
    productimage: FileHandle[]
    
  
    constructor(
      pubid: number,
      likes: number,
      content: string,
      publication_date: Date,
      img: string,
      comments: commentaire[],
      productimage: FileHandle[]
    ) {
      this.pubid = pubid;
      this.likes = likes;
      this.content = content;
      this.publication_date = publication_date;
      this.img = img;
      this.comments = comments;
      this.productimage= productimage;
    }
  }
  