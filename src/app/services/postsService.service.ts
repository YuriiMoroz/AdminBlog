import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost, IPost2 } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

constructor(
  private http:HttpClient
) { }

private url = environment.BACK_URL
private api = {posts:`${this.url}posts`}


getAll() :Observable<IPost2[]>{
  return this.http.get<IPost2[]>(this.api.posts);
}

create(post: IPost) :Observable<void>{
  return this.http.post<void>(this.api.posts, post)
}

update(post: IPost,id:number):Observable<void>{
  return this.http.patch<void>(`${this.api.posts}/${id}`,post)
}

delete(id:number) :Observable<void>{
  return this.http.delete<void>(`${this.api.posts}/${id}`)
}
}
