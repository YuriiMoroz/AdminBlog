import { Component, OnInit } from '@angular/core';
import { IPost, IPost2 } from '../interfaces/post';
import { PostsServiceService } from '../services/postsService.service';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.scss']
})
export class BlogAdminComponent implements OnInit {

  PostsArr!:IPost2[]
  text!:string
  imagePath:string='https://media.sproutsocial.com/uploads/2022/04/Best-times-to-post-2022_BTTP-Social-Media.jpg'
  title!:string
  author!:string
  editID!:number
  edit:boolean = false

  constructor(
    private postService:PostsServiceService
  ) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts():void{
    this.postService.getAll().subscribe(data=>{this.PostsArr=data})
  }

  createPost():void{
    const newPost = {
      text: this.text,
      imagePath: this.imagePath,
      title:this.title,
      author:this.author
    }
    this.postService.create(newPost).subscribe(()=>{
      this.getPosts();
      this.resetForm();
    }
    )
  }

  deletePost(post:IPost2){
    if(confirm('Are you sure')){
      this.postService.delete(post.id).subscribe(()=>{
        this.getPosts();
      })
    }
  }

  editPost(post:IPost2){
    this.editID = post.id
    this.title=post.title
    this.text=post.text
    this.author=post.author
    this.edit=true
  }

  savePost():void{
    const newPost = {
      text: this.text,
      imagePath: this.imagePath,
      title:this.title,
      author:this.author
    }
    this.postService.update(newPost,this.editID).subscribe(()=>{
      this.getPosts();
      this.resetForm();
      this.edit=false
    }
    )
  }

  resetForm():void{
    this.text='';
    this.title='';
    this.author='';
  }

}
