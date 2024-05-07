import { Component, OnInit,Inject } from '@angular/core';
import { FileHandle } from 'src/app/Model/file-handle';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import{MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-showimages',
  templateUrl: './showimages.component.html',
  styleUrls: ['./showimages.component.css']
})
export class ShowimagesComponent implements OnInit {
 constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
 ngOnInit(): void {
  this.receiveImages();
     
 }
 receiveImages(){
  console.log(this.data);
}
}
