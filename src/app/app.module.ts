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
    CreatcommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
