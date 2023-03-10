import { Component, OnInit } from '@angular/core';
import { IPost2 } from '../interfaces/post';
import { PostsServiceService } from '../services/postsService.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public posts!:IPost2[]

  constructor(
    private postService:PostsServiceService
    ) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts():void{
    this.postService.getAll().subscribe(data=>{this.posts=data})
  }
}
