import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { HttpClientModule } from "@angular/common/http";
import { PostComponent } from './FrontOffice/post/post.component';
import { CommentComponent } from './FrontOffice/comment/comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatpostComponent } from './FrontOffice/creatpost/creatpost.component';
import { CreatcommentComponent } from './FrontOffice/creatcomment/creatcomment.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import{MatDialogModule} from '@angular/material/dialog';
import { ShowimagesComponent } from './FrontOffice/showimages/showimages.component'
import {MatGridListModule} from '@angular/material/grid-list'
import{MatDialog} from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    AllTemplateFrontComponent,
    HomeFrontComponent,
    PostComponent,
    CommentComponent,
    CreatpostComponent,
    CreatcommentComponent,
    ShowimagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatGridListModule,
    MatDialog
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
