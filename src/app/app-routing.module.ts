import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";
import { BlogComponent } from "./components/blog/blog.component";
import {BlogItemDetailsComponent} from './components/blog-item-details/blog-item-details.component';
import {BlogHomeComponent} from './components/blog-home/blog-home.component';
import {AddPostComponent} from './components/add-post/add-post.component';


const routes: Routes = [
{
path:"",
component: HomeComponent
},
{
path:"contact",
component: ContactComponent
},
{
  path: "blog",
  component: BlogHomeComponent
},
{
  path: "blog/detail/:id",
  component: BlogItemDetailsComponent
},
{
  path:'add-post',
  component: AddPostComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
