import { Injectable } from '@angular/core';
import { Post } from '../Model/post';
import { FileHandle } from '../Model/file-handle';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitazer:DomSanitizer) { }
  public createImages(post: Post){
    post.productimage = [];
    const postImages: any[]=post.productimage;
    const postImageToFileHandle:FileHandle[]=[];
    for(let i=0;i<postImages.length;i++){
      const imageFileData = postImages[i];
  
      // Convert data URI into a blob
      const imageBlob=this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile=new File([imageBlob],imageFileData.name,{type: imageFileData.type});
  
      // Create a FileHandle object with the file and a URL
      const finalFileHandle:FileHandle={
        file:imageFile,
        url:this.sanitazer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(imageFile))
      };
      postImageToFileHandle.push(finalFileHandle);
    }
    // Update the post with the processed images
    post.productimage=postImageToFileHandle;
    return post;
  }
  public dataURItoBlob(picBytes:string,imageType:string){
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for(let i=0; i<byteString.length; i++){
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], {type: imageType});
    return blob;
  }
}
