import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { PostComponent } from './FrontOffice/post/post.component';
import { CreatpostComponent } from './FrontOffice/creatpost/creatpost.component';

const routes: Routes = [
{path:"",
  component:AllTemplateFrontComponent,
  children:[
    {
      path:"",
      component:HomeFrontComponent
    },
    {
      path:"posts",
      component:PostComponent

      
    },
    {
      path:"addpost",
      component:CreatpostComponent
    }
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
