export class Post {
    pubid: number;
    likes: number;
    content: string;
    publication_date: Date;
    img: string;
    comments: Comment[];
  
    constructor(
      pubid: number,
      likes: number,
      content: string,
      publication_date: Date,
      img: string,
      comments: Comment[]
    ) {
      this.pubid = pubid;
      this.likes = likes;
      this.content = content;
      this.publication_date = publication_date;
      this.img = img;
      this.comments = comments;
    }
  }
  