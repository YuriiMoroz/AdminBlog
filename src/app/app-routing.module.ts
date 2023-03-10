import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';

const routes: Routes = [
  {path:'blog',component:BlogComponent},
  {path:'admin',component:BlogAdminComponent},
  { path: '', pathMatch: 'full', redirectTo: 'blog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
